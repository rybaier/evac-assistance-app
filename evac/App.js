import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as AuthorizationProvider} from './src/context/AuthContext'
import { navigationRef } from './RootNavigation'

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
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import WelcomeLoginCredCheckScreen from './src/screens/WelcomeLoginCredCheckScreen';

// need to have to navigation flows
    // login flow, has access to signup signin and aboutApp
    // main flow has access to everything else

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const LoggedIn = () => {
  return(
      <Drawer.Navigator >
        <Drawer.Screen name='Home' component={MainScreen} />
        <Drawer.Screen name='EvacGrabList' component={EvacGrabListScreen} />
        <Drawer.Screen name='HowToGuide' component={HowToGuideScreen} />
        <Drawer.Screen name='LocationShare' component={LocationShareScreen} />
        <Drawer.Screen name='MeetingPlaces' component={MeetingPlacesScreen} />
        <Drawer.Screen name='Messages' component={MessageScreen} />
        <Drawer.Screen name='ScannerRadio' component={ScannerRadioScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
  )
}



function App(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="CredCheck" component={WelcomeLoginCredCheckScreen} options={{headerShown: false}}/>
        <Stack.Screen name="About" component={AboutScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Signup' component={SignupScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Signin' component={SigninScreen} options={{headerShown: false}}/> 
        <Stack.Screen name='LoggedIn' component={LoggedIn} options={{headerShown: false}}/>
        <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
   
  )
}

export default () => {
  return(
    <AuthorizationProvider>
      <NavigationContainer ref={navigationRef}>
          <App />    
      </NavigationContainer>
    </AuthorizationProvider>
  )

}