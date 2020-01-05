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
import Icon from 'react-native-vector-icons/Ionicons';

import goTodoapp from '../assets/goTodoApp.png';
import api from '../services/api';
import Styles from './styles/styles';

Icon.loadFont();

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
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
        const response = await api.post('/register', {
            username,
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
                    placeholder="Insira seu username"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    returnKeyType="next"
                    autoCorrect={false}
                    value={username}
                    onChangeText={setUsername}
                />

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
                    returnKeyType="go"
                    autoCorrect={false}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <View style={Styles.areaBtns}>
                    <TouchableOpacity
                        style={Styles.buttonReturn}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Icon
                            name="ios-exit"
                            size={30}
                            color="#fff"
                            style={{ transform: [{ rotate: '180deg' }] }}
                        />
                        <Text style={Styles.textButton}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSubtmit}
                        style={Styles.button}
                    >
                        <Text style={Styles.textButton}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
