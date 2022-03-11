import React from 'react'
import {Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const MainScreen = () => {
    return (
        <SafeAreaView>
            <Text style={{fontSize: 48}}> Main Screen</Text>
            <Text> Evac Grab Flatlist here</Text>
            <Text> Meeting Place Flatlist here</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default MainScreen