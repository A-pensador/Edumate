import 'react-native-gesture-handler';
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Screens

import Splash from '../screens/Splash'
import Home from '../screens/Home';
import Home_Old from '../screens/Home_Old';
import ClassForm from '../screens/ClassForm';

import Video from '../screens/Video';
import Audio from '../screens/Audio';
import FeedBack from '../screens/FeedBack';
import NewFeedBack from '../screens/NewFeedback';


const Stack = createStackNavigator();

function Navigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />  
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Home_Old" component={Home_Old} />
        <Stack.Screen name="ClassForm" component={ClassForm} />
        <Stack.Screen name="Video" component={Video} />
        <Stack.Screen name="Audio" component={Audio} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        <Stack.Screen name="NewFeedback" component={NewFeedBack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
