import React, {useState, useEffect} from 'react';
import {View,Image, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';

import {Container, Text} from 'native-base';

import { GiftedChat, Bubble, Send, SendProps } from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';
import Pusher from "pusher-js/react-native";
import axios from "../axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function MessagesBrodcast({navigation, route}) {

    const [messages,setMessages] = useState([]);

    const name = route.params.thread.name;
    useEffect(() => {
      axios.get('/messages/sync',{ params: { value: name } })
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
        if(newMessage.chatroomName === name){
        setMessages([...messages,newMessage]);
        }
      });
      return () => {
        channel.unbind_all();
        channel.unsubscribe();
      }
    },[messages]);


   
    
  function handleSend(newMessage = []) {
     setMessages(GiftedChat.append(newMessage,messages));
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
        
       <GiftedChat
        messages={messages} 
        inverted={false}
        //onSend={newMessage => handleSend(newMessage)}
        user={{_id:1, name: 'Gaurav Jain' }}
        renderBubble={renderBubble}
        //placeholder='Type your message here...'
        showUserAvatar
        //alwaysShowSend
        minComposerHeight={0}
        maxComposerHeight={0}
        minInputToolbarHeight={0}
        renderInputToolbar={() => null}
        scrollToBottomComponent={scrollToBottomComponent}
        //renderSend={renderSend}
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