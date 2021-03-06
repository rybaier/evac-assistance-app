import React, { useContext, useEffect } from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'
import { Context as AuthorizationContext } from '../../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context as ItemContext } from '../../context/GrabItemContext'

const WelcomeLoginCredCheckScreen = ({ navigation }) => {
    const { stillLoggedIn } = useContext(AuthorizationContext)

    useEffect(()=>{
        stillLoggedIn()
    }, [])
    //use interval function to create a blinking cred check message 
    return (
        <SafeAreaView>
            <Text style={{fontSize: 48}}> Welcome Checking Credentials </Text>
            <Button onPress={() => navigation.navigate('Signin')} title= 'Sign In' />
            <Button onPress={() => navigation.navigate('Signup')} title= 'Sign Up' />
            <Button onPress={() => navigation.navigate('LoggedIn')} title= 'Logged In Flow Delete' />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default WelcomeLoginCredCheckScreen