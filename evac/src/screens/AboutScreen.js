import React from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'

const AboutScreen = () => {
    return (
        <View>
            <Text style={{fontSize: 48}}> About Screen</Text>
            <Button onPress={() => navigaiton.navigate('Signin')} title= 'Sign In' />
            <Button onPress={() => navigaiton.navigate('Signup')} title= 'Sign Up' />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default AboutScreen