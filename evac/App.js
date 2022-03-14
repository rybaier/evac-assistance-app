import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as AuthorizationProvider} from './src/context/AuthContext'
import { Provider as GrabItemProvider} from './src/context/GrabItemContext';
import { Provider as MeetingPlaceProvider } from './src/context/MeetingPlaceContext';
import { navigationRef, navigate } from './RootNavigation'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

//==============
// Screens
//==============
import AboutScreen from "./src/screens/AboutScreen";
import EvacGrabItemScreen from "./src/screens/GrabItems/EvacGrabItemScreen";
import HowToGuideScreen from "./src/screens/HowToGuideScreen";
import LocationShareScreen from "./src/screens/LocationShareScreen";
import MainScreen from "./src/screens/MainScreen";
import MeetingPlacesScreen from "./src/screens/MeetingPlaces/MeetingPlacesScreen";
import MessageScreen from "./src/screens/MessageScreen";
import ScannerRadioScreen from "./src/screens/ScannerRadioScreen";
import SigninScreen from "./src/screens/Login/SigninScreen";
import SignupScreen from "./src/screens/Login/SignupScreen";
import ResetPasswordScreen from './src/screens/Login/ResetPasswordScreen';
import WelcomeLoginCredCheckScreen from './src/screens/Login/WelcomeLoginCredCheckScreen';
import CreateGrabItemScreen from './src/screens/GrabItems/CreateGrabItemScreen';
import GrabItemDetailScreen from './src/screens/GrabItems/GrabItemDetailScreen';
import CreateMeetingPlacesScreen from './src/screens/MeetingPlaces/CreateMeetingPlacesScreen';
import MeetingPlaceDetailScreen from './src/screens/MeetingPlaces/MeetingPlaceDetailScreen';
// need to have to navigation flows
    // login flow, has access to signup signin and aboutApp
    // main flow has access to everything else

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const LoggedIn = () => {
  return(
      <Drawer.Navigator  >
        <Drawer.Screen name='Home' component={ MainScreen } />
        <Drawer.Screen name='EvacGrabItem' component={ EvacGrabItemScreen } options={
          {headerRight: () => (
          <TouchableOpacity onPress={() => navigate('CreateItem')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
        title: 'My Evac Item List'
        } }/>
        <Drawer.Screen name='LocationShare' component={ LocationShareScreen } />
        <Drawer.Screen name='MeetingPlaces' component={ MeetingPlacesScreen } options={
          {headerRight: () => (
          <TouchableOpacity onPress={() => navigate('CreatePlace')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
        title: 'My Meeting Place List'
        } }/>
        {/* <Drawer.Screen name='Messages' component={MessageScreen} /> */}
        {/* <Drawer.Screen name='ScannerRadio' component={ScannerRadioScreen} /> */}
        <Drawer.Screen name="About" component={ AboutScreen } />
        <Drawer.Screen name='HowToGuide' component={ HowToGuideScreen } />
     
      </Drawer.Navigator>
  )
}



function App(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="CredCheck" component={ WelcomeLoginCredCheckScreen } options={{headerShown: false}}/>
        <Stack.Screen name="About" component={ AboutScreen } options={{headerShown: false}}/>
        <Stack.Screen name='Signup' component={ SignupScreen } options={{headerShown: false}}/>
        <Stack.Screen name='Signin' component={ SigninScreen } options={{headerShown: false}}/> 
        <Stack.Screen name='LoggedIn' component={ LoggedIn } options={{headerShown: false}}/>
        <Stack.Screen name='ResetPassword' component={ ResetPasswordScreen } options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={ MainScreen } />
        <Stack.Screen name='EvacGrabItem' component={ EvacGrabItemScreen } />
        <Stack.Screen name='LocationShare' component={ LocationShareScreen } />
        <Stack.Screen name='MeetingPlaces' component={ MeetingPlacesScreen } />
        {/* <Stack.Screen name='Messages' component={MessageScreen} /> */}
        {/* <Stack.Screen name='ScannerRadio' component={ScannerRadioScreen} /> */}
        <Stack.Screen name='HowToGuide' component={ HowToGuideScreen } />   
        <Stack.Screen name='CreateItem' component={ CreateGrabItemScreen } />
        <Stack.Screen name='ItemDetail' component={ GrabItemDetailScreen } />
        <Stack.Screen name= 'CreatePlace' component={ CreateMeetingPlacesScreen } />
        <Stack.Screen name= 'PlaceDetail' component={ MeetingPlaceDetailScreen } />
      </Stack.Navigator>
   
  )
}

export default () => {
  return(
    <MeetingPlaceProvider>
    <GrabItemProvider>
    <AuthorizationProvider>
      <NavigationContainer ref={navigationRef}>
          <App />    
      </NavigationContainer>
    </AuthorizationProvider>
    </GrabItemProvider>
    </MeetingPlaceProvider>
  )

}