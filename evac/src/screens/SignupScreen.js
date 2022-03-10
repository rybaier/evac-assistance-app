import React from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'

const SignupScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{fontSize: 48}}> Signup Screen</Text>
            <Button onPress={() => navigation.navigate('About')} title= 'About this App' />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SignupScreen