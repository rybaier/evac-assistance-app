
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
        default:
            return state
    }
}    

const getItems = dispatch => async () => {
    console.log('get')
}

const createItems = dispatch => async () => {
    console.log('create')
}

const deleteItems = dispatch => async () => {
 console.log('delete')
}

const editItems = dispatch => async () => {
    console.log('edit')
}



export const { Provider, Context} = createDataContext(ItemReducer, 
    {getItems, createItems, deleteItems, editItems}, [])