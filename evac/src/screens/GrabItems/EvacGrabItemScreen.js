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
  const [loading, setLoading] = useState(false)
  const [ data, setData ] = useState([])
  
//  const getData = async () => {
//    try {
//      await evacAPI.get('/items').then((res)=> console.log(res.json))
//    } catch (err) {
     
//    }
//  }
  useEffect(() => {
      setLoading(true)
      getItems()
      setData(state)
      setLoading(false)
      console.log(data, '1')
    }, [data])
 
    return (
      <View>
  
     <FlatList  data = { data } keyExtractor = { (item) => item._id}  renderItem ={ ({item}) => <Text>{item.name }</Text>
                  //  return(
                  //     <Text>{ item.name }</Text>      
                    // <View style={ styles.row }>
                    //     <Text style= {styles.text}> { item.priority }</Text>
                    //     <Text style= {styles.text}> { item.name }</Text>
                    //     <Text style= {styles.text}>{ item.location } </Text>
                    //     <TouchableOpacity onPress={ () => navigation.navigate('ItemDetail', { id: item._id}) }>
                    //         <Ionicons name= 'information-circle-outline' style={ styles.icon } />
                    //     </TouchableOpacity>
                    //     <TouchableOpacity onPress={ ()=> deleteItems(item._id) }>
                    //         <FontAwesome name= 'trash-o' style={ styles.icon } />
                    //     </TouchableOpacity>
                    // </View>
              
            // )
        }/> 
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
      fontSize: 25,
      color: 'red'
    }
})

export default EvacGrabItemScreen