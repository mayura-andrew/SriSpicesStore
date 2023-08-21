import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmail from '../screens/ConfirmEmailScreen';
import ForgotPassword from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPassword from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='ConfirmEmail' component={ConfirmEmail} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='Confirm' component={ConfirmEmail} />
            <Stack.Screen name='NewPassword' component={NewPassword} />
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}

const styles = StyleSheet.create({})