import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import CustomButton from '../CustomButton';


export default function SocialSignInButtons() {
    const onSignInGoogle = () => {
        alert('Sign In with Google')
    }
    
    const onSignInFacebook = () => {
        alert('Sign In with Facebook')
    }
  return (
    <>
        <CustomButton text='Sign In with Google' onPress={onSignInGoogle} bgColor='#FAE9EA' fbColor='#DD4D44' />
        <CustomButton text='Sign In with Facebook' onPress={onSignInFacebook} bgColor='#E7EAF4' fbColor='#4765A9'/>
    </>

   
  )
}

const styles = StyleSheet.create({})