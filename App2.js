
import React, {useState, useEffect} from 'react';
import {View,Image, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Footer, Title, Button, Left, Right, Body, Icon, Text, Tabs, Tab, TabHeading, Badge, Content, Card, CardItem, Thumbnail, Form } from 'native-base';
import appStyles from './appStyles';
import Broadcast from './screens/Broadcast';
import { GiftedChat, Bubble, Send, SendProps } from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';
import PersonalGrp from './screens/PersonalGrp';
import ChatScreenPers from './screens/ChatScreenPers';

function HomeScreen({ navigation }) {
  return (
    <Container>
      
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
        
        <Container>
        <Content style = {{ backgroundColor : "#FFEEDD"}}>
        <Card style = {{marginTop: 0, marginBottom: 0, borderColor: '#030014'}}>
            <CardItem style = {{justifyContent : 'center'}} button onPress={() => navigation.navigate('Messages')}>
            <Left style = {{flex : 1 }}>
              <Thumbnail source = {require('./i.png')}/>
            </Left>
              <Body style = {{flex : 3, justifyContent: 'center'}}>
                <Text>Hostel Dance Group</Text>
                <Text note numberOfLines = {1}>Hello students fejgejrgdjvfhfbleri eirgjb;eorjgb;er eirjjbg;ejgb;eroj erjgb;erogb;eorjgb;erojg;ber</Text>
              </Body>
              <Right style = {{flex : 1 }}>  
              <Icon name="arrow-forward" />
              <Text note>3:43 pm</Text>
              </Right>
             </CardItem>
        </Card>

        <Card style = {{marginTop: 0, marginBottom: 0, borderColor: '#030014'}}>
            <CardItem style = {{justifyContent : 'center'}}>
            <Left style = {{flex : 1 }}>
              <Thumbnail source = {require('./i.png')}/>
            </Left>
              <Body style = {{flex : 3, justifyContent: 'center'}}>
                <Text>Me and the Bois</Text>
                <Text note numberOfLines = {1}>Hello students ruhfreuhf;areo roheroaufh;eoaruf rofharofh;aoerhf;er urfhoaerih</Text>
              </Body>
              <Right style = {{flex : 1 }}>  
              <Icon name="arrow-forward" />
              <Text note>3:43 pm</Text>
              </Right>
             </CardItem>
        </Card>

        <Card style = {{marginTop: 0, marginBottom: 0, borderColor: '#030014'}}>
            <CardItem style = {{justifyContent : 'center'}}>
            <Left style = {{flex : 1 }}>
              <Thumbnail source = {require('./i.png')}/>
            </Left>
              <Body style = {{flex : 3, justifyContent: 'center'}}>
                <Text>NSS Vidya Teaching</Text>
                <Text note numberOfLines = {1}>Hello students</Text>
              </Body>
              <Right style = {{flex : 1 }}>  
              <Icon name="arrow-forward" />
              <Text note>3:43 pm</Text>
              </Right>
             </CardItem>
        </Card>
           
        <Card style = {{marginTop: 0, marginBottom: 0, borderColor: '#030014'}}>
            <CardItem style = {{justifyContent : 'center'}} button onPress={() => navigation.navigate('Messages')}>
            <Left style = {{flex : 1 }}>
              <Thumbnail source = {require('./i.png')}/>
            </Left>
              <Body style = {{flex : 3, justifyContent: 'center'}}>
                <Text>Summer Trip 2021</Text>
                <Text note numberOfLines = {1}>Hello students</Text>
              </Body>
              <Right style = {{flex : 1 }}>              
              <Icon name="arrow-forward"/>
              <Text note>3:43 pm</Text>
              </Right>
             </CardItem>
           </Card>

           <Card style = {{marginTop: 0, marginBottom: 0, borderColor: '#030014'}}>
            <CardItem style = {{justifyContent : 'center'}}>
            <Left style = {{flex : 1 }}>
              <Thumbnail source = {require('./i.png')}/>
            </Left>
              <Body style = {{flex : 3, justifyContent: 'center'}}>
                <Text>Summer Trip 2021</Text>
                <Text note numberOfLines = {1}>Hello students</Text>
              </Body>
              <Right style = {{flex : 1 }}>              
              <Icon name="arrow-forward"/>
              <Text note>3:43 pm</Text>
              </Right>
             </CardItem>
           </Card>
           
        </Content>
        </Container>

        
        </Tab>
        

      </Tabs>
    </Container>
  );
}

function MessagesScreen() {

  

  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: 'Nice to meet you. :)',
      createdAt: new Date().getTime(),
      system: false,
      user: {
        _id: 3,
        name: 'Pratyush Pandey'
      },

    },
    // example of chat message
    {
      _id: 1,
      text: 'Hello!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Rijurekha Sen'
      }
    },
    {_id: 2,
      text: 'Yes sir',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Rijurekha Sen'
      }
    },
    {_id: 3,
      text: 'Online Applications are invited from the 4th year BTech & Dual Degre Students for UG Teaching Assistantship TA for the 1st Semesterand also from the 2nd year MSc students for UG Teaching Assistantship ',
      createdAt: new Date().getTime(),
      user: {
        _id: 4,
        name: 'Saksham Chourasiya'
      }
    },
  
    {
      _id: 4,
      text: 'Integer nec risus quis erat placerat molestie. Nullam orci metus, rutrum posuere ante ac, consectetur rutrum eros. Pellentesque dictum tristique posuere. Integer ultrices velit a ex sodales congue. Fusce tellus nulla, placerat quis quam eu, consequat maximus sapien. Nullam leo leo, commodo eu nunc a, gravida pretium tortor. Nam eu tristique turpis, et feugiat enim. Nullam varius nisi eget auctor egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Aenean eleifend congue ante ut malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi at sapien commodo, facilisis odio ut, laoreet turpis. Suspendisse vel leo turpis. Aliquam a tortor orci.',
      createdAt: new Date().getTime(),
      user: {
        _id: 1,
        name: 'Gaurav Jain'
      }
    },
    {
      _id: 5,
      text: 'I am from IBM!',
      createdAt: new Date().getTime(),
      user: {
        _id: 3,
        name: 'Yogish Sabharwal'
      }
    },
    
  ]);

  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
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
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1, name: 'Gaurav Jain' }}
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
const Stack = createStackNavigator();

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


export default class App extends React.Component {
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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Instant Messaging" 
        screenOptions={{
        headerStyle: {
          backgroundColor: '#9792F3',
          height: 100,
        },
        headerTitleStyle:{
          color: 'snow',
        },
        tabBarOptions: {
          activeTintColor: 'snow',
          
        },

        headerTintColor: 'white'

    
       

        
        
        }}>

          <Stack.Screen name="Instant Messaging" component={HomeScreen} options={{ 
            title: "Instant Messaging",
          headerRight: () => (
            <TouchableOpacity 
            style={{padding:10}}>
            <Ionicons color="snow" size={25} name='search'/>
             </TouchableOpacity> 
              
          
          ),
          headerLeft: () => (
            <TouchableOpacity 
            style={{padding:10}}>
            <Ionicons color="snow" size={25} name='menu'/>
             </TouchableOpacity>
             
          ),
          }} />
          <Stack.Screen name="Messages" component={MessagesScreen} options={{
            headerRight: () => (
              
              <TouchableOpacity style={{padding:10}}>
                <Ionicons name='search' size={25} color='snow' />
              </TouchableOpacity>
            ),
            title: "Summer Trip 2021"

          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
//import PersonalGrp from './screens/PersonalGrp';
//import ChatScreenPers from './screens/ChatScreenPers';

/*function HomeScreen({ navigation }) {
  return (
    <Container>
      
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
        
        <Container>
        <Content style = {{ backgroundColor : "#FFEEDD"}}>
        <Card style = {{marginTop: 0, marginBottom: 0, borderColor: '#030014'}}>
            <CardItem style = {{justifyContent : 'center'}} button onPress={() => navigation.navigate('Messages')}>
            <Left style = {{flex : 1 }}>
              <Thumbnail source = {require('./i.png')}/>
            </Left>
              <Body style = {{flex : 3, justifyContent: 'center'}}>
                <Text>Hostel Dance Group</Text>
                <Text note numberOfLines = {1}>Hello students fejgejrgdjvfhfbleri eirgjb;eorjgb;er eirjjbg;ejgb;eroj erjgb;erogb;eorjgb;erojg;ber</Text>
              </Body>
              <Right style = {{flex : 1 }}>  
              <Icon name="arrow-forward" />
              <Text note>3:43 pm</Text>
              </Right>
             </CardItem>
        </Card>

        <Card style = {{marginTop: 0, marginBottom: 0, borderColor: '#030014'}}>
            <CardItem style = {{justifyContent : 'center'}}>
            <Left style = {{flex : 1 }}>
              <Thumbnail source = {require('./i.png')}/>
            </Left>
              <Body style = {{flex : 3, justifyContent: 'center'}}>
                <Text>Me and the Bois</Text>
                <Text note numberOfLines = {1}>Hello students ruhfreuhf;areo roheroaufh;eoaruf rofharofh;aoerhf;er urfhoaerih</Text>
              </Body>
              <Right style = {{flex : 1 }}>  
              <Icon name="arrow-forward" />
              <Text note>3:43 pm</Text>
              </Right>
             </CardItem>
        </Card>

        <Card style = {{marginTop: 0, marginBottom: 0, borderColor: '#030014'}}>
            <CardItem style = {{justifyContent : 'center'}}>
            <Left style = {{flex : 1 }}>
              <Thumbnail source = {require('./i.png')}/>
            </Left>
              <Body style = {{flex : 3, justifyContent: 'center'}}>
                <Text>NSS Vidya Teaching</Text>
                <Text note numberOfLines = {1}>Hello students</Text>
              </Body>
              <Right style = {{flex : 1 }}>  
              <Icon name="arrow-forward" />
              <Text note>3:43 pm</Text>
              </Right>
             </CardItem>
        </Card>
           
        <Card style = {{marginTop: 0, marginBottom: 0, borderColor: '#030014'}}>
            <CardItem style = {{justifyContent : 'center'}} button onPress={() => navigation.navigate('Messages')}>
            <Left style = {{flex : 1 }}>
              <Thumbnail source = {require('./i.png')}/>
            </Left>
              <Body style = {{flex : 3, justifyContent: 'center'}}>
                <Text>Summer Trip 2021</Text>
                <Text note numberOfLines = {1}>Hello students</Text>
              </Body>
              <Right style = {{flex : 1 }}>              
              <Icon name="arrow-forward"/>
              <Text note>3:43 pm</Text>
              </Right>
             </CardItem>
           </Card>

           <Card style = {{marginTop: 0, marginBottom: 0, borderColor: '#030014'}}>
            <CardItem style = {{justifyContent : 'center'}}>
            <Left style = {{flex : 1 }}>
              <Thumbnail source = {require('./i.png')}/>
            </Left>
              <Body style = {{flex : 3, justifyContent: 'center'}}>
                <Text>Summer Trip 2021</Text>
                <Text note numberOfLines = {1}>Hello students</Text>
              </Body>
              <Right style = {{flex : 1 }}>              
              <Icon name="arrow-forward"/>
              <Text note>3:43 pm</Text>
              </Right>
             </CardItem>
           </Card>
           
        </Content>
        </Container>

        
        </Tab>
        

      </Tabs>
    </Container>
  );
}

/*function MessagesScreen() {

  userEffect(() => {
    const pusher = new Pusher('dedf7c986071f7d72e6c', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  },[])

  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
  //  {
    /*  _id: 0,
      text: 'Nice to meet you. :)',
      createdAt: new Date().getTime(),
      system: false,
      user: {
        _id: 3,
        name: 'Pratyush Pandey'
      },

    },
    // example of chat message
    {
      _id: 1,
      text: 'Hello!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Rijurekha Sen'
      }
    },
    {_id: 2,
      text: 'Yes sir',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Rijurekha Sen'
      }
    },
    {_id: 3,
      text: 'Online Applications are invited from the 4th year BTech & Dual Degre Students for UG Teaching Assistantship TA for the 1st Semesterand also from the 2nd year MSc students for UG Teaching Assistantship ',
      createdAt: new Date().getTime(),
      user: {
        _id: 4,
        name: 'Saksham Chourasiya'
      }
    },
  
    {
      _id: 4,
      text: 'Integer nec risus quis erat placerat molestie. Nullam orci metus, rutrum posuere ante ac, consectetur rutrum eros. Pellentesque dictum tristique posuere. Integer ultrices velit a ex sodales congue. Fusce tellus nulla, placerat quis quam eu, consequat maximus sapien. Nullam leo leo, commodo eu nunc a, gravida pretium tortor. Nam eu tristique turpis, et feugiat enim. Nullam varius nisi eget auctor egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Aenean eleifend congue ante ut malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi at sapien commodo, facilisis odio ut, laoreet turpis. Suspendisse vel leo turpis. Aliquam a tortor orci.',
      createdAt: new Date().getTime(),
      user: {
        _id: 1,
        name: 'Gaurav Jain'
      }
    },
    {
      _id: 5,
      text: 'I am from IBM!',
      createdAt: new Date().getTime(),
      user: {
        _id: 3,
        name: 'Yogish Sabharwal'
      }
    },
    
  ]);

  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
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
                
      </Header>  */
      
    /*  <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1, name: 'Gaurav Jain' }}
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
const Stack = createStackNavigator();

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


export default class App extends React.Component {
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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Instant Messaging" 
        screenOptions={{
        headerStyle: {
          backgroundColor: '#9792F3',
          height: 100,
        },
        headerTitleStyle:{
          color: 'snow',
        },
        tabBarOptions: {
          activeTintColor: 'snow',
          
        },

        headerTintColor: 'white'

    
       

        
        
        }}>

          <Stack.Screen name="Instant Messaging" component={HomeScreen} options={{ 
            title: "Instant Messaging",
          headerRight: () => (
            <TouchableOpacity 
            style={{padding:10}}>
            <Ionicons color="snow" size={25} name='search'/>
             </TouchableOpacity> 
              
          
          ),
          headerLeft: () => (
            <TouchableOpacity 
            style={{padding:10}}>
            <Ionicons color="snow" size={25} name='menu'/>
             </TouchableOpacity>
             
          ),
          }} />
          <Stack.Screen name="Messages" component={MessagesScreen} options={{
            headerRight: () => (
              
              <TouchableOpacity style={{padding:10}}>
                <Ionicons name='search' size={25} color='snow' />
              </TouchableOpacity>
            ),
            title: "Summer Trip 2021"

          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
} */
