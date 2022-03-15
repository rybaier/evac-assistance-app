import React, { useContext, useEffect, useState } from 'react'
import {Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context as ItemContext } from '../../context/GrabItemContext'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 


const EvacGrabItemScreen = ({ navigation }) => {
    const { state, deleteItems, getItems } = useContext(ItemContext)
  // console.log(state)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
      setLoading(true)
      getItems()
      setLoading(false)
    }, [])
 
    return (
      <View>
          {loading === false && state.length > 0 ?
          <FlatList  data = { state } keyExtractor = { (item) => item._id}  renderItem ={ ({item}) => {
                        return(
                            <TouchableOpacity onPress={() => styles.checked}>
                                <View style={ styles.row }>
                                    <Text style= {styles.text}> { item.priority }</Text>
                                    <Text style= {styles.text}> { item.name }</Text>
                                    <TouchableOpacity onPress={ () => navigation.navigate('ItemDetail', { id: item._id}) }>
                                        <Ionicons name= 'information-circle-outline' style={ styles.icon } />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={ ()=> deleteItems(item._id) }>
                                        <FontAwesome name= 'trash-o' style={ styles.icon } />
                                    </TouchableOpacity>
                                </View>
                             </TouchableOpacity>
                    
                  )
              }}/> : <Text style={ styles.text }> Add Items...For list access</Text>}
    </View>   
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
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