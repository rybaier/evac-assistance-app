import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//==============
// Screens
//==============
import AboutScreen from "./src/screens/AboutScreen";
import EvacGrabListScreen from "./src/screens/EvacGrabListScreen";
import HowToGuideScreen from "./src/screens/HowToGuideScreen";
import LocationShareScreen from "./src/screens/LocationShareScreen";
import MainScreen from "./src/screens/MainScreen";
import MeetingPlacesScreen from "./src/screens/MeetingPlacesScreen";
import MessageScreen from "./src/screens/MessageScreen";
import ScannerRadioScreen from "./src/screens/ScannerRadioScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";

// need to have to navigation flows
    // login flow, has access to signup signin and aboutApp
    // main flow has access to everything else

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Signup' component={SignupScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name= 'Signin' component={SigninScreen} />    
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App