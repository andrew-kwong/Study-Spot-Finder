import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen'; 
import LoginScreen from './screens/LoginScreen'; 
import LoadingScreen from './screens/LoadingScreen';

const AppStack = createStackNavigator({
  HomeScreen: { 
      screen: HomeScreen,
  },
});

const AuthStack = createStackNavigator({

  Login: {
    screen: LoginScreen,
  }, 
  Register: {
    screen: RegisterScreen
  },
}); 

const App = createAppContainer(
  createSwitchNavigator( 
    {
      
      Loading: {
        screen: LoadingScreen,
      }, 

      App: {
        screen: AppStack
      }, 

      Auth: {
        screen: AuthStack
      }, 
      
      initalRouteName: {
        screen: "Loading"
      }

    }
  )

);

export default App; 
