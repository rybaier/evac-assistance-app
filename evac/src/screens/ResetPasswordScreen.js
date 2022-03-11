import React, { useContext } from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginForm from '../components/LogInForm'
import { Context as AuthorizationContext } from '../context/AuthContext'
//form variables
//formTitle, errorMessage, onSubmit, buttonText 
const ResetPasswordScreen = ({ navigation }) => {
    const { state, signin, resetPassword } = useContext(AuthorizationContext)
    return (
        <SafeAreaView>
         <LoginForm 
         formTitle={'Welcome to Evac-act Sign In to continue'}
         errorMessage={'add context here'} 
         onSubmit={({ email, password })=> signin({ email, password }) } 
         buttonText= {'Sign In' }
         />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default ResetPasswordScreen