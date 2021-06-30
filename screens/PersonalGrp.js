import React, { Component } from 'react';
import { Container, Button, Footer, View, Header, Content, Card, CardItem, Text, Icon, Right, Thumbnail, Left, Body, ListItem } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default class PersonalGrp extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content style = {{ backgroundColor : "#FFEEDD"}}>
        <Card style = {{marginTop: 0, marginBottom: 0, borderColor: '#030014'}}>
            <CardItem style = {{justifyContent : 'center'}} button onPress={() => navigation.navigate(<ChatScreenPers/>)}>
            <Left style = {{flex : 1 }}>
              <Thumbnail source = {require('../i.png')}/>
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
              <Thumbnail source = {require('../i.png')}/>
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
              <Thumbnail source = {require('../i.png')}/>
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
            <CardItem style = {{justifyContent : 'center'}}>
            <Left style = {{flex : 1 }}>
              <Thumbnail source = {require('../i.png')}/>
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
              <Thumbnail source = {require('../i.png')}/>
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
    );
  }
}