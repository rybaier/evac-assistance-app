import React from 'react'
import createDataContext from './createDataContext'
import evacAPI from '../api/evacAPI'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../../RootNavigation'

const navigate = RootNavigation.navigate

const MeetingPlaceReducer = (state, action) => {
    switch (action.type){
        case 'get_places':
            return action.payload
        default:
            return state
    }
}    

const getPlaces = dispatch => async () => {
    console.log('get')
    const response = await evacAPI.get('/meetingplaces')
    dispatch({type: 'get_places', payload: response.data })
}

const createPlaces = dispatch => async ( name, compassD, address) => {
    console.log('create')
    // await evacAPI.post('/meetingplaces', {  name, compassD, address } )
    navigate('Home')
}

const deletePlaces = dispatch => async (id) => {
 console.log('delete')
 await evacAPI.delete(`/meetingplaces/${id}`)
}

const editPlaces = dispatch => async (id, name, compassD, address) => {
    console.log('edit')
    await evacAPI.put(`/meetingplaces${id}`, { name, compassD, address })
    dispatch ({type: 'edit_place', payload: {id, name, compassD, address}})
    navigate('Home')
}

export const { Provider, Context} = createDataContext(MeetingPlaceReducer, 
    { getPlaces, createPlaces, deletePlaces, editPlaces}, {isSignedIn : true})