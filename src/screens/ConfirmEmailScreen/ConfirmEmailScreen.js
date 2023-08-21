import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Keyboard, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Logo from '/home/andrew/reactNative/srispicesstore/assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSigninButtons';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmail = () => {

    const [code, setCode] = React.useState('');
    const navigation = useNavigation();

    const onConfirm = () => {
        navigation.navigate('NewPassword');
    }
    const onBack = () => {
        navigation.navigate('SignIn');
    }

    const onResend = () => {
        navigation.navigate('Confirm');
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.flexContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.registrationText}>Confirm your email</Text>
                <CustomInput placeholder='Enter your confirmation code' value={code} setValue={setCode} />
                <CustomButton text='Confirm' onPress={onConfirm} />
                <CustomButton text='Resend confirmation code' onPress={onResend}  type='SECONDARY'/>
                <CustomButton text="Back" onPress={onBack} type='TERTIARY'/>
            </ScrollView>
            </View>      
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default ConfirmEmail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 20,
        marginVertical: 100,
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
