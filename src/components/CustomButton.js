import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fbColor}) => {
  return (
    <Pressable onPress={onPress} style={[
        styles.container, 
        styles[`container_${type}`], 
        bgColor ? {backgroundColor: bgColor} : {}
        ]}>
      <Text style={[
        styles.text, 
        styles[`text_${type}`],
        fbColor ? {color: fbColor} : {}
    ]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 10,

    },
    container_PRIMARY:{
        backgroundColor: '#e47911',
    },
    container_TERTIARY:{
    
    },
    container_Back:{
        backgroundColor: 'green',
    },
    container_SECONDARY:{
        borderColor: '#e47911',
        borderWidth: 2,        
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },
    text_TERTIARY:{
        color: 'gray',
    },
    text_SECONDARY:{
        color: 'black',
    },


})