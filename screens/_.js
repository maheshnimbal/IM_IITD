import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tabs, Tab, TabHeading, Badge } from 'native-base';
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import appStyles from './appStyles';
import Broadcast from './screens/Broadcast';
import PersonalGrp from './screens/PersonalGrp';
import ChatScreenPers from './screens/ChatScreenPers';


export default class App extends Component {
  constructor(props){
    super(props);
    setTimeout(()=>{
      StatusBar.setBackgroundColor('#9792FE');
    },100);
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    return (
      <Container>
        <Header style = {appStyles.appTitle}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#EDFFEC'}}>IM</Title>
          </Body>
          <Right>
            <Button transparent >
              <Icon name="search"/>
            </Button>  
          </Right>
        </Header>
        <Tabs intialPage = {0} 
              tabBarBackgroundColor = '#EDFFEC'
              tabContainerStyle = {{elevation: 0}}
              tabBarUnderlineStyle = {appStyles.tabBarUnderlineStyle}>
              
          <Tab 
            heading = {
              <TabHeading style = {{backgroundColor: '#9792F3'}}>
                <Text style = {{color: '#EDFFEC'}}>Broadcast</Text>
                
                <Badge style = {appStyles.badge}>
                <Text style = {appStyles.badgeText}>4</Text>
                </Badge>
            
          
              </TabHeading>
            }>

          <Broadcast/>

          </Tab>

          <Tab heading={
            <TabHeading style = {{backgroundColor: '#9792F3'}}>
              <Text style = {{color: '#EDFFEC'}}>Personal Groups</Text>
              <Badge style = {appStyles.badge} >
              <Text style = {appStyles.badgeText}>2</Text>
          </Badge>
            </TabHeading>
          }>
          
          <PersonalGrp/>
          
          </Tab>
          
          <Tab heading={
            <TabHeading style = {{backgroundColor: '#9792F3'}}>
              <Text style = {{color: '#EDFFEC'}}>Chat Screen</Text>
              <Badge style = {appStyles.badge} >
              <Text style = {appStyles.badgeText}>2</Text>
          </Badge>
            </TabHeading>
          }>
          
          <ChatScreenPers/>
          
          </Tab>

        </Tabs>
      </Container>
    );
  }
}