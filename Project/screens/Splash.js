import React, {useRef, useEffect} from 'react';
import Assets from '../Assets/Images/index';
import {StatusBar, StyleSheet, ImageBackground} from 'react-native';


const SplashFun = props => {

    const animation = useRef(null);

    useEffect(() => {
        //animation.current.play();
        setTimeout(() => {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'signIn'}],
          });
        }, 1000);
      }, []);

  return (
    <ImageBackground source={Assets.splashBG} style={styles.bgImgStyle}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
    </ImageBackground>
  );
};

export default SplashFun;
const styles = StyleSheet.create({
    bgImgStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  

  });