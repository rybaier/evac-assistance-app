import React, { useContext } from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'
import {Context as AuthorizationContext} from '../context/AuthContext'
import LoginForm from '../components/LogInForm'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignupScreen = ({ navigation }) => {
    const {state, signup } = useContext(AuthorizationContext)
    const { errorMessage } = state
    return (
        <SafeAreaView>
            <LoginForm 
            formTitle={'Welcome to Evac-act Sign Up to continue'}
            errorMessage={ errorMessage } 
            onSubmit={({ email, password })=> signup({ email, password }) } 
            buttonText= {'Sign Up' }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default SignupScreen