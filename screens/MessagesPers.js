import React, {useState, useEffect, useCallback} from 'react';
import {View,Image, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';

import {Container, Text} from 'native-base';

import { GiftedChat, Bubble, Send, SendProps } from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';
import Pusher from "pusher-js/react-native";
import axios from "../axios";



export default function MessagesPers() {

    const [messages,setMessages] = useState([]);

    useEffect(() => {
      axios.get('/messages/sync')
        .then(response => {
          setMessages(response.data);
        })
    },[]);

    useEffect(() => {
      const pusher = new Pusher('dedf7c986071f7d72e6c', {
        cluster: 'eu'
      });
    
      const channel = pusher.subscribe('messages');
      channel.bind('inserted', (newMessage) => {
        if(newMessage._id != '1'){
          setMessages([...messages,newMessage]);
        }
      });
      return () => {
        channel.unbind_all();
        channel.unsubscribe();
      }
    },[messages]);

    
   async function handleSend(newMessage) {
    setMessages(GiftedChat.append(newMessage,messages))
    axios.post('/messages/new',{
      text: newMessage[newMessage.length-1].text,
      createdAt: new Date().getTime(),
      user: {
        _id: '1',
        name: "Gaurav Jain"
      },
    });
    }


    
    function renderBubble(props) {
      return (
        // Step 3: return the component
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              // Here is the color change
              backgroundColor: '#9792F3'
            }
          }}
          textStyle={{
            right: {
              color: '#fff'
            }
          }}
        />
      );
    }
  
    function renderSend(props) {
      return (
        <Send {...props}>
          <View style={styles.sendingContainer}>
            <IconButton icon='send-circle' size={32} color='#9792F3' />
          </View>
        </Send>
      );
    }
  
    function scrollToBottomComponent() {
      return (
        <View style={styles.bottomComponentContainer}>
          <IconButton icon='chevron-double-down' size={36} color='#9792F3' />
        </View>
      );
    }
  
    
    return(
      <Container>
         {/* <Header style = {appStyles.appTitle}>
          <Left style = {{flex: 1, flexDirection : 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Thumbnail source = {require('./i.png')} style = {{ aspectRatio : 1.5,resizeMode : 'contain',  borderRadius: 150 / 2,overflow: "hidden"}}/>
          </Left>
  
          <Body style = {{flex : 3, flexDirection : 'row', justifyContent: 'center', alignContent: 'center'}}>
            <Title style={{color: '#EDFFEC'}}>Summer Trip 2021</Title>
          </Body>
  
          <Right style = {{flex: 1, flexDirection : 'row'}}>
  
          <Button transparent >
            <Icon name="search"/>
          </Button>  
  
          </Right>
                  
        </Header>  */}
        
       <GiftedChat
        messages={messages} 
        inverted={false}
        onSend={newMessage => handleSend(newMessage)}
        user={{_id: '1', name: 'Gaurav Jain' }}
        renderBubble={renderBubble}
        placeholder='Type your message here...'
        showUserAvatar
        alwaysShowSend
        scrollToBottomComponent={scrollToBottomComponent}
        renderSend={renderSend}
        />
      </Container>
      
      );
}
  
  const styles = StyleSheet.create({
    sendingContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

  
  function LogoTitle() {
    return (
      
      <View styles={{fontWeight: 'bold'}}><Text styles={{fontWeight: 'bold', backgroundColor : "white"}}>IM</Text></View>
      
    );
  }