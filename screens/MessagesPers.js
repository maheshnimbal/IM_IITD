import React, {useState, useEffect} from 'react';
import {View,Image, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';

import {Container, Text} from 'native-base';

import { GiftedChat, Bubble, Send, SendProps } from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';
import Pusher from "pusher-js/react-native";
import axios from "../axios"


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
        alert(JSON.stringify(newMessage));
        setMessages([...messages,newMessage]);
      });
      return () => {
        channel.unbind_all();
        channel.unsubscribe();
      }
    },[messages]);


    // const [messages, setMessages] = useState([
    //   /**
    //    * Mock message data
    //    */
    //   // example of system message
    //   {
    //     _id: 0,
    //     text: 'Nice to meet you. :)',
    //     createdAt: new Date().getTime(),
    //     system: false,
    //     user: {
    //       _id: 3,
    //       name: 'Pratyush Pandey'
    //     },
  
    //   },
    //   // example of chat message
    //   {
    //     _id: 1,
    //     text: 'Hello!',
    //     createdAt: new Date().getTime(),
    //     user: {
    //       _id: 2,
    //       name: 'Rijurekha Sen'
    //     }
    //   },
    //   {_id: 2,
    //     text: 'Yes sir',
    //     createdAt: new Date().getTime(),
    //     user: {
    //       _id: 2,
    //       name: 'Rijurekha Sen'
    //     }
    //   },
    //   {_id: 3,
    //     text: 'Online Applications are invited from the 4th year BTech & Dual Degre Students for UG Teaching Assistantship TA for the 1st Semesterand also from the 2nd year MSc students for UG Teaching Assistantship ',
    //     createdAt: new Date().getTime(),
    //     user: {
    //       _id: 4,
    //       name: 'Saksham Chourasiya'
    //     }
    //   },
    
    //   {
    //     _id: 4,
    //     text: 'Integer nec risus quis erat placerat molestie. Nullam orci metus, rutrum posuere ante ac, consectetur rutrum eros. Pellentesque dictum tristique posuere. Integer ultrices velit a ex sodales congue. Fusce tellus nulla, placerat quis quam eu, consequat maximus sapien. Nullam leo leo, commodo eu nunc a, gravida pretium tortor. Nam eu tristique turpis, et feugiat enim. Nullam varius nisi eget auctor egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Aenean eleifend congue ante ut malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi at sapien commodo, facilisis odio ut, laoreet turpis. Suspendisse vel leo turpis. Aliquam a tortor orci.',
    //     createdAt: new Date().getTime(),
    //     user: {
    //       _id: 1,
    //       name: 'Gaurav Jain'
    //     }
    //   },
    //   {
    //     _id: 5,
    //     text: 'I am from IBM!',
    //     createdAt: new Date().getTime(),
    //     user: {
    //       _id: 3,
    //       name: 'Yogish Sabharwal'
    //     }
    //   },
      
    // ]);
    
  function handleSend(newMessage = []) {
     setMessages(GiftedChat.append(newMessage,messages))
    
      
      axios.post('/messages/new',{
        
      text: messages[messages.length - 1].text,
      createdAt: new Date().getTime(),
      user: {
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
        user={{_id:1, name: 'Gaurav Jain' }}
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
      // <Header style = { {height:60, width: '100%', margin: 0, padding: 0, flex : 1,  backgroundColor: '#9792F3'}}>
      //       <Left>
      //         <Button transparent>
      //           <Icon name='menu' />
      //         </Button>
      //       </Left>
      //       <Body>
      //         <Title style={{color: '#EDFFEC'}}>IM</Title>
      //       </Body>
      //       <Right>
      //         <Button transparent >
      //           <Icon name="search"/>
      //         </Button>  
      //       </Right>
      // </Header>
      <View styles={{fontWeight: 'bold'}}><Text styles={{fontWeight: 'bold', backgroundColor : "white"}}>IM</Text></View>
      
    );
  }