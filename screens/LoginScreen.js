import React, { useState, useContext, Component } from 'react';
import { AppRegistry,TextInput, View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { AuthContext } from '../navigation/AuthProvider';

export default function LoginScreen({ navigation }) {
  const [mobileNumber, setmobileNumber] = useState('');
  const [password, setPassword] = useState('');

  //const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Welcome to IM IITD</Title>
      <FormInput
        labelName='Mobile Number'
        value={mobileNumber}
        keyboardType={'numeric'}
        onChangeText={usermobileNumber => setmobileNumber(usermobileNumber)}
      />
      <FormInput
        labelName='Password'
        value={password}
        secureTextEntry={true}
        onChangeText={userPassword => setPassword(userPassword)}
      />
      <FormButton
        title='Login'
        modeValue='contained'
        labelStyle={styles.loginButtonLabel}
        // onPress={() => login(email, password)}
        onPress={() => navigation.navigate('Home')}
      />
      <FormButton
        title='New user? Join here'
        modeValue='text'
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() => navigation.navigate('Signup')}
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
    fontSize: 16
  }
});