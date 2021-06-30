import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/Pages/main';
import Login from './src/Pages/login';

const AuthStack = createStackNavigator();

export default function Stak(){
  return(
    <NavigationContainer>
      <AuthStack.Navigator
      headerMode = 'none'>
        <AuthStack.Screen name = 'Login' component={Login}/>
        <AuthStack.Screen name = 'Main' component={Main}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}