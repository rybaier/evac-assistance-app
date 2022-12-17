import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { Button } from '@rneui/themed';
import BasicStyledSpace from "./BasicStyleSpace";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const Slides = ({ data, navigation }) => {

        const renderLastSlide = (index) => {
            if (index === data.length -1){
                return(
                <View>
                    <BasicStyledSpace />
                    <View style={ styles.row }>
                        <TouchableOpacity style={ styles.column } onPress={() => navigation.navigate('Signin') }>
                            <MaterialIcons name="account-circle" size={50} color="black" />                     
                            <Text style={ styles.text }>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.column }onPress={() => navigation.navigate('Signup') }>
                            <MaterialCommunityIcons name="account-plus" size={50} color="black" /> 
                            <Text style={ styles.text }>Sign Up</Text>
                        </TouchableOpacity>
                </View>
                </View>
                )
            }
        }

    return(
        <ScrollView horizontal style={{flex:1}} pagingEnabled>
             {data.map((slide, index)=>{
            return(
         
                <View key={slide.text} style= {[styles.slideStyle, 
                {backgroundColor: slide.color }]}>
                    <Text style= {styles.textStyle}>{slide.text}</Text>
                    <Text style= {styles.textStyle}>{slide.text1}</Text>
                    <Text style= {styles.textStyle}>{slide.text2}</Text>
                    <Text style= {styles.textStyle}>{slide.text3}</Text>
                    {renderLastSlide(index)}
                </View>
            )
        })}
    
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'black',
        margin: 15

    },
    slideStyle:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    buttonStyle: {
        margin: 10,
    },
    container : {
        margin: 50,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 52       
    },   
    column:{
        flexDirection: 'column',
        alignItems:'center'
    },
    text:{
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10
    }
    
})

export default Slides