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
import Icon from 'react-native-vector-icons/Ionicons';

import goTodoapp from '../assets/goTodoApp.png';
import api from '../services/api';

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

    async function handleSubtmit(action) {
        if (action === 'register') {
            const response = await api.post('/register', {
                username,
                email,
                password,
            });

            const { _id } = response.data;

            await AsyncStorage.setItem('user', _id);
            navigation.navigate('MenuList');
        } else {
            navigation.navigate('Login');
        }
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={goTodoapp} style={styles.logo} />

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu username"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    returnKeyType="next"
                    autoCorrect={false}
                    value={username}
                    onChangeText={setUsername}
                />

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
                    returnKeyType="go"
                    autoCorrect={false}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <View style={styles.areaBtns}>
                    <TouchableOpacity
                        style={styles.buttonReturn}
                        onPress={() => handleSubtmit('voltar')}
                    >
                        <Icon
                            name="ios-exit"
                            size={30}
                            color="#fff"
                            style={{ transform: [{ rotate: '180deg' }] }}
                        />
                        <Text style={styles.textButton}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleSubtmit('register')}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>Registrar</Text>
                    </TouchableOpacity>
                </View>
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

    buttonReturn: {
        backgroundColor: '#FFB2B2',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        borderRadius: 5,
        marginTop: 20,
        padding: 10,
        flexDirection: 'row',
    },

    areaBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
