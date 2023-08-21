import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Keyboard, Dimensions, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSigninButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [mobileNumber, setMobileNumber] = React.useState('')
    const [birthDate, setBirthDate] = React.useState('')

    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }

    const onRegisterPressed = () => {
        navigation.navigate('SignIn');
    }

    const onTermofConditions = () => {
        alert('Term of Conditions')
    }

    const onPrivacyPolicy = () => {
        alert('Privacy Policy')
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.flexContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.text}>Welcome to Sri Spices Store</Text>
                <Text style={styles.registrationText}>Create an free account </Text>
                <CustomInput placeholder='Enter User Name' value={userName} setValue={setUserName} />
                <CustomInput placeholder='Enter Email' value={email} setValue={setEmail} />
                <CustomInput placeholder='Enter Password' value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomButton text='Register' onPress={onRegisterPressed} />
                <Text style={styles.text_Privacy}>
                    By creating an account, you agree to our <Text style={styles.link} onPress={onTermofConditions}>Terms of Service</Text> and <Text style={styles.link} onPress={onPrivacyPolicy}>Privacy Policy</Text>
                </Text>
                <SocialSignInButtons />
                <CustomButton text="Allready registered ? Sign In" onPress={onSignInPressed} type="TERTIARY" />
            </ScrollView>
            </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flexContainer: {
        flex: 1,
        height: '100%',
        width: '100%',


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
    text_Privacy: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 20,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});
