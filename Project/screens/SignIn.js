import React, {useRef, useEffect, useState} from 'react';
import Assets from '../Assets/Images/index';

import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const SignInFun = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [pwd, setPwd] = useState('');
  const [isVisible, setIsVisible] = useState('');
  const [usernameValidError, setusernameValidError] = useState('');
  const [passwordValidError, setPasswordValidError] = useState('');

  const signIn = () => {
    var usernameValid = false;
    if (userName.length == 0) {
      setusernameValidError('Username is required');
    } else if (userName.length < 6) {
      setusernameValidError('Username should be minimum 6 characters');
    } else if (userName.indexOf(' ') >= 0) {
      setusernameValidError('Username cannot contain spaces');
    } else {
      setusernameValidError('');
      usernameValid = true;
    }
    var passwordValid = false;
    if (pwd.length == 0) {
      setPasswordValidError('Password is required');
    } else if (pwd.length < 6) {
      setPasswordValidError('Password should be minimum 6 characters');
    } else if (pwd.indexOf(' ') >= 0) {
      setPasswordValidError('Password cannot contain spaces');
    } else {
      setPasswordValidError('');
      passwordValid = true;
    }
    if (usernameValid && passwordValid) {
      alert('Username: ' + userName + '\nPassword: ' + pwd);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <Image source={Assets.splashBG} style={styles.logoImageBg}></Image>

        <Text style={styles.textSignIn}>Sign In</Text>

        <View style={{padding: 10, margin: 10}}>
          <TextInput
            style={styles.textUnderlineView}
            placeholder="Username"
            value={userName}
            onChangeText={userName => setUserName(userName)}></TextInput>
       
        </View>

        <View style={{padding: 10, margin: 10}}>
          <TextInput
            style={styles.textUnderlineView}
            placeholder="Password"
            value={pwd}
            onChangeText={pwd => setPwd(pwd)}
            secureTextEntry={isVisible ? false : true}></TextInput>
         
          <TouchableOpacity
            style={{
              padding: 10,
              position: 'absolute',
              right: 10,
            }}
            onPress={() => {
              setIsVisible(!isVisible);
            }}>
            <Image
              source={Assets.eyeBG}
              style={{
                height: 30,
                width: 30,
                padding: 5,
                alignSelf: 'center',
                resizeMode: 'center',
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity 
      onPress={() => navigation.navigate('home')} 
      style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInFun;

const styles = StyleSheet.create({
  bgImgStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImageBg: {
    alignSelf: 'center',
    bottom: 10,
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: '#ed174f',
    padding: 10,
    margin: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },
  textSignIn: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
  },
  textUnderlineView: {
    textAlign: 'left',
    fontSize: 14,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
});
