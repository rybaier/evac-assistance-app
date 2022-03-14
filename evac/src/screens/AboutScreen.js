import React from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BasicStyledSpace from '../components/BasicStyleSpace'
const AboutScreen = ({ navigation }) => {
    return (
        <View>
             <Button onPress={() => navigation.navigate('Signin')} title= 'Sign In Flow Delete' />

            <Button onPress={() => navigation.navigate('LoggedIn')} title= 'Logged In Flow Delete' />
            <Text style={ styles.about }>Welcome to Evac-act this app is designed to help ease some of the 
                stress that is involved when the call to evacuate your home is made. </Text>
                <Text style={ styles.about }>There are 2 main parts to this app</Text>
                <BasicStyledSpace />
                <Text style={ styles.about }>1. Create a list of Items that you would want to grab if evacuation was called.
                    - You will give each item a priority number 1 - 5 with 1 being ABSOLUTE MUST GRAB.
                    - Along with priority you will give a name, location in your house, and any instructions
                        that go along with that item.
                </Text>
                <BasicStyledSpace />
                <Text style={ styles.about }>2. Create a List of Meeting places. Places where you can gather with friends or other family
                    when evacuation is called. It is HIGHLY recommended that you choose at least one for each compass direction.
                    North, South, East and West. 
                </Text >
                <BasicStyledSpace />
                <Text style={ styles.about }> By using this app, and it allows you to take time and consider what you really want to Save
                    Before the stress of Evacuation happens. This stress is natural, so rather than trying to decide 
                    what to grab you can open this app and go down your checklist. Grabbing what you can by priority order
                    based on the amount of time you have. 
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    about:{
        fontSize: 18
    }
})

export default AboutScreen