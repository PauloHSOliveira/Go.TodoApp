import React from 'react';
import {
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import goTodoapp from '../assets/goTodoApp.png';

export default function Login() {
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
                    autoCorrect={false}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Insira sua senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.registerForm}>
                <Text style={styles.textRegister}>Ainda não possuí conta?</Text>

                <Text style={styles.textRegister}>Registre-se agora!</Text>

                <TouchableOpacity style={styles.registerBtn}>
                    <Text style={styles.textBtnRegister}>Registrar</Text>
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
        borderBottomWidth: 2,
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
        borderWidth: 2,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: '#B2FFFA',
        borderRightColor: '#B2FFC8',
        borderTopColor: '#F9B2FF',
        borderBottomColor: '#FFF7B2',
        borderRadius: 5,
        marginTop: 30,
    },

    textBtnRegister: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#18F2E5',
    },
});
