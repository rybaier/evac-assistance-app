import React from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import BasicStyledSpace from '../../components/BasicStyleSpace'
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slides from '../../components/Slides'



const WelcomeToPrEvac = ({ navigation }) => {

    const SLIDE_DATA = [
        {text: 'Welcome to PrEvac!',
        text1:'',
        text2:'This app is designed to help ease some of the stress that is involved when the call to evacuate your home is made',
        text3:'There are 2 main parts to this app',
         color:'009688'},
        {text: '1. Create a list of Items that you would want to grab if evacuation was called.',
        text1:'You will give each item a priority number 1 - 5 with 1 being ABSOLUTE MUST GRAB.', 
        text2: 'Along with priority you will give a name, location in your house, and any instructions that go along with that item.', 
        text3: '',
        color:'03A9F4'},
        {
        text: '2. Create a List of Meeting places.', 
        text1: 'Places where you can gather with friends or other family when evacuation is called. It is HIGHLY recommended that you choose at least one for each compass direction.',
        text2: 'North, South, East and West. ', 
        text3: '', 
        color:'009688'
        },
        {
        text: 'By using this app,  it allows you to take time and consider what you really want to Save',
        text1: 'Before the stress of Evacuation happens. This stress is natural, so rather than trying to decide', 
        text2: 'what to grab when evacuating. You can open this app and go down your checklist. Grabbing what you can by priority order',
        text3: 'based on the amount of time you have. ',
        color:'#03A9F4'
        },
    ]

    return (
        
        <ScrollView >
            <Slides data = { SLIDE_DATA } navigation = {navigation}/>
                {/* <BasicStyledSpace />
                <View style={ styles.row }>
                <TouchableOpacity style={ styles.column } onPress={() => navigation.navigate('Signin') }>
                <MaterialIcons name="account-circle" size={50} color="black" />                     
                <Text style={ styles.text }>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.column }onPress={() => navigation.navigate('Signup') }>
                <MaterialCommunityIcons name="account-plus" size={50} color="black" /> 
                <Text style={ styles.text }>Sign Up</Text>
                </TouchableOpacity>
            </View> */}
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10
    },
    bg:{ 
        backgroundColor: '#808080'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 52       
    },
    column:{
        flexDirection: 'column',
        alignItems:'center'
    },
})

export default WelcomeToPrEvac