import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { Container, Button, Footer, Header, Content, Card, CardItem, Text, Icon, Right, Thumbnail, Left, Body, ListItem, Link } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionButton from 'react-native-action-button';
import axios from "../axios"
import Pusher from "pusher-js/react-native";

export default function Broadcast ({navigation}){
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    axios.get('/chatrooms/sync')
      .then(response => {
        setThreads(response.data);
      })
  },[]);

  useEffect(() => {
    const pusher = new Pusher('dedf7c986071f7d72e6c', {
      cluster: 'eu'
    });
  
    const channel = pusher.subscribe('chatroom');
    channel.bind('inserted', (newChatroom) => {
      setThreads([...threads,newChatroom]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[threads]);

  const [loading, setLoading] = useState(true);

    return (
      
    <View style={styles.container}>
    <FlatList
      data={threads}
      extraData={threads}
      keyExtractor={item => item._id}
      ItemSeparatorComponent={() => <Divider />}
      renderItem={({ item }) => (
        <TouchableOpacity
        onPress={() => {
          navigation.navigate('Brodcast Messages', { thread: item })
      }}
      style = {{flex:1, flexDirection : "row"}}
      >
        <Image source={{uri:item.icon}}  style={{width:60, height:60,borderRadius:30, margin: 5}} />
        {/* <List.Item
          title={item.name}
          description={item.description}
          titleNumberOfLines={1}
          titleStyle={styles.listTitle}
          descriptionStyle={styles.listDescription}
          descriptionNumberOfLines={1}
        /> */}
        <View>
        <Text style={styles.listTitle}>{item.name}</Text>
        <Text style={styles.listDescription}>{item.description}</Text>
        </View>
        
      </TouchableOpacity>
      )}
    />
    <ActionButton buttonColor="rgba(231,76,60,1)" onPress={()=>navigation.navigate('JoinBrodcastGroups')}>
</ActionButton>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    padding: 5
  },
  listTitle: {
    fontSize: 22,
    padding: 5
  },
  listDescription: {
    fontSize: 16,
    paddingLeft : 5,
    paddingBottom : 5
  }
});