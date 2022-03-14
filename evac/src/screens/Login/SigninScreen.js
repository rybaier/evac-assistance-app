import React, { useContext } from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'
import LoginForm from '../../components/LogInForm'
import { Context as AuthorizationContext } from '../../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
//form variables
//formTitle, errorMessage, onSubmit, buttonText 
const SigninScreen = ({ navigation }) => {
    const { state, signin, resetPassword } = useContext(AuthorizationContext)
    const { errorMessage } = state
    return (
        <SafeAreaView>
         <LoginForm 
         formTitle={'Welcome to Evac-act Sign In to continue'}
         errorMessage={ errorMessage } 
         onSubmit={({ email, password })=> signin({ email, password }) } 
         buttonText= {'Sign In' }
         />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default SigninScreen