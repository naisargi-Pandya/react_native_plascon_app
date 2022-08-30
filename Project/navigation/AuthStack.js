import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashFun from '../screens/Splash';
import SignInFun from '../screens/SignIn';
import HomeFun from '../screens/HomeScreen';
import AddOrderFun from '../screens/AddOrder';
// import DrawerFun from '../screens/DrawerView';

const BASE_STACK = createStackNavigator();
const Drawer = createDrawerNavigator();

function Rootfile ()  {
  return(
      <BASE_STACK.Navigator headerMode={'none'} initialRouteName={'splash'}>
        <BASE_STACK.Screen name={'splash'} component={SplashFun} />
        <BASE_STACK.Screen name={'signIn'} component={SignInFun} />
        <BASE_STACK.Screen name={'home'} component={HomeFun} />
        {/* <Drawer.Screen name={'drawer'} component={DrawerFun} /> */}
        <BASE_STACK.Screen name={'addOrder'} component={AddOrderFun} />
      </BASE_STACK.Navigator>
  );
};

export default Rootfile;
