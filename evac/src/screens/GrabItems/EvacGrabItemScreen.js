import React, { useContext, useEffect } from 'react'
import {Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context as ItemContext } from '../../context/GrabItemContext'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 
import { NavigationEvents } from 'react-navigation'

import * as RootNavigation from '../../../RootNavigation'

const EvacGrabItemScreen = ({ navigation }) => {
    const { state, deleteItems, getItems } = useContext(ItemContext)
  console.log(state)
  const navigate = RootNavigation
  console.log (RootNavigation)

  console.log(navigation)
  useEffect(() => {
        getItems() 
        const eventListener =  navigation.addListener('didFocus', () => {
          getItems()
      })

      return () => {
          eventListener.removeListener()
      }
      
    }, [])
    
    return (
      <View>
       
    {state.length > 0 ?
     <FlatList style= {{flex:1}} data = { state } keyExtractor = { (item) => item._id}  renderItem ={ ({item}) => {
          console.log(item, '1')
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
        }}/> : <Text> Loading Items...</Text>}
    </View>   
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
    },
    text:{
      fontSize: 18
    }
})

export default EvacGrabItemScreen