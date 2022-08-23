import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home'
import Esqueceu from './src/Esqueceu';
import Login from './src/Login';
const Stack = createNativeStackNavigator();

export default function App(){
return (
  
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Esqueceu" component={Esqueceu}/>
      <Stack.Screen name="Login" component={Login}/>
      

    </Stack.Navigator>
  </NavigationContainer>

)


}

