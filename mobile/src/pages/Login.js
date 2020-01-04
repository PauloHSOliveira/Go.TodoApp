import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage,
} from 'react-native';

import goTodoapp from '../assets/goTodoApp.png';
import api from '../services/api';

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

    async function handleSubtmit(action) {
        if (action === 'login') {
            const response = await api.post('/login', {
                email,
                password,
            });

            const { _id } = response.data;

            await AsyncStorage.setItem('user', _id);
            navigation.navigate('MenuList');
        } else {
            navigation.navigate('Register');
        }
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={goTodoapp} style={styles.logo} />

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
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
                    style={styles.input}
                    placeholder="Insira sua senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    returnKeyType="google"
                    autoCorrect={false}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity
                    onPress={() => handleSubtmit('login')}
                    style={styles.button}
                >
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.registerForm}>
                <Text style={styles.textRegister}>Ainda não possuí conta?</Text>
                <TouchableOpacity
                    onPress={() => handleSubtmit('register')}
                    style={styles.registerBtn}
                >
                    <Text style={styles.textBtnRegister}>Registre-se</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 150,
        height: 150,
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 20,
    },

    input: {
        borderBottomWidth: 1,
        borderColor: '#9F9F9F',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#9F9F9F',
        height: 44,
        marginBottom: 20,
        borderRadius: 5,
    },

    button: {
        backgroundColor: '#B2FFC8',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 5,
        marginTop: 20,
        padding: 10,
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    registerForm: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textRegister: {
        fontSize: 16,
        paddingHorizontal: 10,
        marginTop: 5,
    },

    registerBtn: {
        width: 110,
        height: 50,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },

    textBtnRegister: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#18F2E5',
    },
});
