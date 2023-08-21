import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Keyboard, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Logo from '/home/andrew/reactNative/srispicesstore/assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSigninButtons';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {

    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('') 
    const navigation = useNavigation();
    const { height } = Dimensions.get('window');

    const onSignInPressed = () => {
        navigation.navigate('Home');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.flexContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.text}>Welcome to Sri Spices Store</Text>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />
                <Text style={styles.registrationText}>Sign In</Text>
                <CustomInput placeholder='Enter Email' value={userName} setValue={setUserName} />
                <CustomInput placeholder='Enter Password' value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomButton text='Sign In' onPress={onSignInPressed} />
                <CustomButton text='Forogt Password' onPress={onForgotPasswordPressed} type="TERTIARY" />
                <SocialSignInButtons />
                <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY" />
            </ScrollView>
            </View>      
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    flexContainer: {
        flex: 1,
    },
    scrollViewContent: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        flexGrow: 1,
    },
    scrollViewContent: {
        alignItems: 'center',
        padding: 20,
        marginTop: 30,
    },
    logo: {
        width: '40%',
        maxWidth: 300,
        maxHeight: 200,
        height: '50%',
    },
    text: {
        paddingTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
        fontFamily: 'monospace',
    },
    registrationText: {
        fontSize: 16,
        color: 'blue',
        marginBottom: 20,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
});
