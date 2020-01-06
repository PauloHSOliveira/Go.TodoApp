import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../services/api';
import Styles from './styles/styles';

Icon.loadFont();

export default function List({ navigation }) {
    const [title, setTitle] = useState('');
    const [state, setState] = useState('');
    const [color, setColor] = useState('');
    const [init, setInit] = useState('');
    const [end, setEnd] = useState('');

    const [load, setLoad] = useState(false);

    const id = navigation.getParam('id');

    useEffect(() => {
        async function loadList() {
            const response = await api.get('/list', {
                headers: { id },
            });

            setTitle(response.data.name);
            setState(response.data.complete);
            setColor(response.data.color);

            setLoad(true);
        }
        loadList();
    });

    async function handleDelete() {
        await api.delete('/list', {
            headers: { id },
        });

        navigation.navigate('MenuList');
    }

    if (!load) {
        return (
            <View style={Styles.container}>
                <ActivityIndicator size="large" color="#B2FFC8" />
            </View>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: color,
            }}
        >
            <View style={Styles.header}>
                <TouchableOpacity>
                    <Icon name="edit" size={40} />
                </TouchableOpacity>
                <Text>{title}</Text>
                <TouchableOpacity onPress={handleDelete}>
                    <Icon name="delete-sweep" size={50} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
