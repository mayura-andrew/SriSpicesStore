import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmail from './src/screens/ConfirmEmailScreen';
import ForgotPassword from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPassword from './src/screens/NewPasswordScreen';
import Navigation from './src/navigator';
export default function App() {
  return (
    <SafeAreaView style={styles.root}>
    <Navigation />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    
  },
});
