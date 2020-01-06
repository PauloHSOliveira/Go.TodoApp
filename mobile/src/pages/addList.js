import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
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
                style={{
                    backgroundColor: '#FFB2B2',
                    alignSelf: 'flex-start',
                    marginLeft: 20,
                    ...Styles.button,
                }}
                onPress={handleReturn}
            >
                <Text style={Styles.textButton}>Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Nova Lista</Text>

            <View
                style={{ paddingHorizontal: 30, marginTop: 20, ...Styles.form }}
            >
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

                <Text style={Styles.textlist}>Inicio:</Text>

                <DatePicker
                    style={{ width: 300, marginTop: 10 }}
                    date={init}
                    mode="date"
                    placeholder=" "
                    format="DD-MM-YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            marginLeft: 0,
                        },
                        dateInput: {
                            borderBottomWidth: 1,
                            borderTopWidth: 0,
                            borderRightWidth: 0,
                            borderLeftWidth: 0,
                            ...Styles.input,
                        },
                    }}
                    onDateChange={newDate => setInit(newDate)}
                />

                <Text style={Styles.textlist}>Fim:</Text>

                <DatePicker
                    style={{
                        width: 300,
                        marginTop: 10,
                    }}
                    date={end}
                    mode="date"
                    placeholder=" "
                    format="DD-MM-YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            marginLeft: 0,
                        },
                        dateInput: {
                            borderBottomWidth: 1,
                            borderTopWidth: 0,
                            borderRightWidth: 0,
                            borderLeftWidth: 0,
                            ...Styles.input,
                        },
                    }}
                    onDateChange={newDate => setEnd(newDate)}
                />
                <View style={styles.colors}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#B2FFFA',
                            ...Styles.colorPicker,
                        }}
                        onPress={() => selectColor('#B2FFFA')}
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#F9B2FF',
                            ...Styles.colorPicker,
                        }}
                        onPress={() => selectColor('#F9B2FF')}
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#FFB2B2',
                            ...Styles.colorPicker,
                        }}
                        onPress={() => selectColor('#FFB2B2')}
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#B2FFC8',
                            ...Styles.colorPicker,
                        }}
                        onPress={() => selectColor('#B2FFC8')}
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#FFED8D',
                            ...Styles.colorPicker,
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
