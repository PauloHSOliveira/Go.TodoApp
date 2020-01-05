import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';

import goTodoapp from '../assets/goTodoApp.png';
import api from '../services/api';
import Styles from './styles/styles';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('MenuList');
            }
        });
    }, []);

    async function handleSubtmit() {
        const response = await api.post('/login', {
            email,
            password,
        });

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);
        navigation.navigate('MenuList');
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={Styles.container}>
            <Image source={goTodoapp} style={Styles.logo} />

            <View style={Styles.form}>
                <TextInput
                    style={Styles.input}
                    placeholder="Insira seu e-mail"
                    placeholderTextColor="#9F9F9F"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType="next"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={Styles.input}
                    placeholder="Insira sua senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    returnKeyType="google"
                    autoCorrect={false}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity onPress={handleSubtmit} style={Styles.button}>
                    <Text style={Styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.registerForm}>
                <Text style={Styles.textRegister}>Ainda não possuí conta?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                    style={Styles.registerBtn}
                >
                    <Text style={Styles.textBtnRegister}>Registre-se</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
