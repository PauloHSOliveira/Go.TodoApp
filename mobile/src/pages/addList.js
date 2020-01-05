import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import api from '../services/api';
import Styles from './styles/styles';

Icon.loadFont();

export default function addList({ navigation }) {
    const [nome, setNome] = useState('');
    const [tasks, setTasks] = useState('');
    const [init, setInit] = useState('');
    const [end, setEnd] = useState('');
    const [color, setColor] = useState('');

    function selectColor(colorSelec) {
        setColor(colorSelec);
    }

    async function handleSubmit() {
        // eslint-disable-next-line camelcase
        const user_id = await AsyncStorage.getItem('user');

        const data = {
            name: nome,
            tasks,
            initDate: init,
            endDate: end,
            color,
        };
        // eslint-disable-next-line no-unused-vars
        const response = await api
            .post('/newlist', data, {
                headers: {
                    user_id,
                },
            })
            // eslint-disable-next-line no-unused-vars
            .then((err, res) => {
                navigation.navigate('MenuList');
            });
    }

    function handleReturn() {
        navigation.navigate('MenuList');
    }

    return (
        <View style={Styles.container}>
            <TouchableOpacity
                style={Styles.buttonReturn}
                onPress={handleReturn}
            >
                <Text style={Styles.textButton}>Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Nova Lista</Text>

            <View style={Styles.form}>
                <TextInput
                    style={Styles.input}
                    placeholder="Insira o nome da lista"
                    placeholderTextColor="#9F9F9F"
                    autoCapitalize="none"
                    returnKeyType="next"
                    autoCorrect={false}
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={Styles.input}
                    placeholder="Tarefas"
                    placeholderTextColor="#9F9F9F"
                    autoCapitalize="none"
                    returnKeyType="next"
                    autoCorrect={false}
                    value={tasks}
                    onChangeText={setTasks}
                />

                <TextInput
                    style={Styles.input}
                    placeholder="Insira o dia de início"
                    placeholderTextColor="#9F9F9F"
                    autoCapitalize="none"
                    returnKeyType="next"
                    autoCorrect={false}
                    value={init}
                    onChangeText={setInit}
                />

                <TextInput
                    style={Styles.input}
                    placeholder="Insira a data final"
                    placeholderTextColor="#9F9F9F"
                    autoCapitalize="none"
                    returnKeyType="next"
                    autoCorrect={false}
                    value={end}
                    onChangeText={setEnd}
                />

                <View style={styles.colors}>
                    <TouchableOpacity
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 50,
                            backgroundColor: '#B2FFFA',
                            margin: 10,
                        }}
                        onPress={() => selectColor('#B2FFFA')}
                    />
                    <TouchableOpacity
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 50,
                            backgroundColor: '#F9B2FF',
                            margin: 10,
                        }}
                        onPress={() => selectColor('#F9B2FF')}
                    />
                    <TouchableOpacity
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 50,
                            backgroundColor: '#FFB2B2',
                            margin: 10,
                        }}
                        onPress={() => selectColor('#FFB2B2')}
                    />
                    <TouchableOpacity
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 50,
                            backgroundColor: '#B2FFC8',
                            margin: 10,
                        }}
                        onPress={() => selectColor('#B2FFC8')}
                    />
                    <TouchableOpacity
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 50,
                            backgroundColor: '#FFED8D',
                            margin: 10,
                        }}
                        onPress={() => selectColor('#FFED8D')}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={Styles.textButton}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#B2FFC8',
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20,
    },

    colors: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
