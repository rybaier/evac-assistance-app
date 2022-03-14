import React, { useContext, useEffect, useState } from 'react'
import {Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context as ItemContext } from '../../context/GrabItemContext'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 
import { NavigationEvents } from 'react-navigation'
import evacAPI from '../../api/evacAPI'

import * as RootNavigation from '../../../RootNavigation'
import axios from 'axios'


const EvacGrabItemScreen = ({ navigation }) => {
    const { state, deleteItems, getItems } = useContext(ItemContext)
  // console.log(state)
  const [loading, SetLoading] = useState(false)
  const [ data, setData ] = useState(null)
  
 const getData = async () => {
   try {
     await evacAPI.get('/items').then((res)=> console.log(res.json))
   } catch (err) {
     
   }
 }
  useEffect(() => {
      SetLoading(true)
      getItems()
      SetLoading(false)
      setData(state)
      console.log(data, '1')
    }, [])
 
    return (
      <View>
    {loading === false && state.length > 0 ?
     <FlatList  data = { data } keyExtractor = { (item) => item._id}  renderItem ={ ({item}) => {
                   return(
                    <TouchableOpacity onPress={() => console.log('here')}>
                    <View style={ styles.row }>
                        <Text style= {styles.text}> { item.priority }</Text>
                        <Text style= {styles.text}> { item.name }</Text>
                        <Text style= {styles.text}>{ item.location } </Text>
                        <TouchableOpacity onPress={ () => navigation.navigate('ItemDetail', { id: item._id}) }>
                            <Ionicons name= 'information-circle-outline' style={ styles.icon } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ ()=> deleteItems(item._id) }>
                            <FontAwesome name= 'trash-o' style={ styles.icon } />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )
        }}/> : <Text> Add Items...For list access</Text>}
    </View>   
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        
    },
    icon: {
        fontSize: 16
    },
    checked:{
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    },
    text:{
      fontSize: 18,
      color: 'red'
    }
})

export default EvacGrabItemScreen