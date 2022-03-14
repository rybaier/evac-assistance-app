import React, { useContext, useEffect } from 'react'
import {Text, View, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context as ItemContext } from '../context/GrabItemContext'
import { Context as MeetingPlaceContext } from '../context/MeetingPlaceContext'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 

import { TouchableOpacity } from 'react-native-gesture-handler'

const GrabItemList = ({ navigation }) => {
    const { state, deleteItems, getItems } = useContext(ItemContext)

    return (
        
                <TouchableOpacity onPress={() => style= styles.checked}>
                    <View style={ styles.row }>
                        <Text> { item.name }</Text>
                        <Text>{ item.location } </Text>
                        <TouchableOpacity onPress={ () => navigation.navigate('ItemDetail', { id: item._id}) }>
                            <Ionicons name= 'information-circle-outline' style={ styles.icon } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ ()=> deleteItems(item._id) }>
                            <FontAwesome name= 'trash-o' style={ styles.icon } />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )
       
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    icon: {
        fontSize: 16
    },
    checked:{
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    }
})

export default GrabItemList