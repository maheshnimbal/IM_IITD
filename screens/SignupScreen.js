import React, { useState , useContext} from 'react';
import {AppRegistry,TextInput, View, StyleSheet } from 'react-native';
import { Title, IconButton } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import {AuthContext} from '../navigation/AuthProvider';


export default function SignupScreen({ navigation }) {

  const { register } = useContext(AuthContext);

  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');

//   const nameRef = React.forwardRef();
//   const emailRef = React.forwardRef(); 
//   const mobileNumberRef = React.forwardRef(); 
//   const passwordRef = React.forwardRef();

    // const registerUser = (props) => {
    //     const name = nameRef.current.value;
    //     const email = emailRef.current.value;
    //     const password = passwordRef.current.value;
    //     const mobileNumber = mobileNumberRef.current.value;

    //     axios.post("http://localhost:8000/user/register", {
    //     name,
    //     email,
    //     password,
    //     mobileNumber,
    //     }).then((response) => {
      
    //         props.history.push("/login");
    //     })
    //     .catch((err) => {
    //     // console.log(err);
    //     if (
    //       err &&
    //       err.response &&
    //       err.response.data &&
    //       err.response.data.message
    //     )
    //       //makeToast("error", err.response.data.message);
    //       console.log(err.response.data.message);
    //     });
    // }

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Register to chat</Title>
      <FormInput
        labelName='Name'
        value={name}
        autoCapitalize='none'
        onChangeText={userName => setName(userName)}
        //ref = {nameRef}
      />
      <FormInput
        labelName='Email'
        value={email}
        autoCapitalize='none'
        onChangeText={userEmail => setEmail(userEmail)}
        //ref = {emailRef}
      />
      <FormInput
        labelName='Password'
        value={password}
        secureTextEntry={true}
        onChangeText={userPassword => setPassword(userPassword)}
        //ref = {passwordRef}
      />
      <FormInput
        labelName='Mobile Number'
        value={mobileNumber}
        keyboardType={'numeric'}
        onChangeText={userMobileNumber => setMobileNumber(userMobileNumber)}
        //ref = {mobileNumberRef}
      />
      <FormButton
        title='Signup'
        modeValue='contained'
        labelStyle={styles.loginButtonLabel}
        onPress = {() => register(name, email, password, mobileNumber)}
      />
      <IconButton
        icon='keyboard-backspace'
        size={30}
        style={styles.navButton}
        color='#6646ee'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
  loginButtonLabel: {
    fontSize: 22
  },
  navButtonText: {
    fontSize: 18
  },
  navButton: {
    marginTop: 10
  }
});