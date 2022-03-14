import React, {useContext} from 'react'
import {Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import GrabItemList from '../components/GrabItemList'
import { Context as AuthorizationContext } from '../context/AuthContext'

const MainScreen = ( { navigation }) => {
    const { signout } = useContext(AuthorizationContext)
    // this will have 2 components in it that are FlatList Checklists 
    // need to make one for both items and meeting places 
    return (
        <>
            <Button title={'sign out'} onPress={signout} />
            <Text style={{fontSize: 48}}> Main Screen</Text>
            <Text> Evac Grab Flatlist here</Text>
            <Text> Meeting Place Flatlist here</Text>
        </>
    )
}

const styles = StyleSheet.create({

})

export default MainScreen