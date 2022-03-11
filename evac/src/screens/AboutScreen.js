import React from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const AboutScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text style={{fontSize: 48}}> About Screen</Text>
            <Button onPress={() => navigation.navigate('Signin')} title= 'Sign In' />
            <Button onPress={() => navigation.navigate('Signup')} title= 'Sign Up' />
            <Button onPress={() => navigation.navigate('LoggedIn')} title= 'Logged In Flow Delete' />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default AboutScreen