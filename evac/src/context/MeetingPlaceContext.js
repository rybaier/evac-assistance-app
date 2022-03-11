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
}

const createPlaces = dispatch => async () => {
    console.log('create')
}

const deletePlaces = dispatch => async () => {
 console.log('delete')
}

const editPlaces = dispatch => async () => {
    console.log('edit')
}

export const { Provider, Context} = createDataContext(MeetingPlaceReducer, 
    { getPlaces, createPlaces, deletePlaces, editPlaces}, {isSignedIn : true})