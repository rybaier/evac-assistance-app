
import React from 'react'
import createDataContext from './createDataContext'
import evacAPI from '../api/evacAPI'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../../RootNavigation'

const navigate = RootNavigation.navigate

const ItemReducer = (state, action) => {
    switch (action.type){
        case 'get_items':
            return action.payload
        case 'edit_items':
            return state.map((item) =>{
                return item.id === action.payload.id ? action.payload : item
            })
        default:
            return state
    }
}    

const getItems = dispatch => async () => {
    console.log('get')
    const response = await evacAPI.get('/items')
    console.log(response.data)
    dispatch({type: 'get_items ', payload: response.data })
}

const createItems = dispatch => async ( {priority, name, location, instructions} ) => {
    console.log('create', {priority, name, location, instructions} )
    await evacAPI.post('/items',  {priority, name, location, instructions}  )
    navigate('Home')
}

const deleteItems = dispatch => async () => {
 console.log('delete')
 await evacAPI.delete(`/items/${id}`)
 navigate('Home')
}

const editItems = dispatch => async ({ id, priority, name, location, instructions }) => {
    console.log('edit')
    await evacAPI.put(`/meetingplaces/${id}`, { priority, name, location, instructions } )
    dispatch ({type: 'edit_items', payload: {id, priority, name, location, instructions } })
    navigate('Home')
}




export const { Provider, Context} = createDataContext(ItemReducer, 
    {getItems, createItems, deleteItems, editItems}, [])