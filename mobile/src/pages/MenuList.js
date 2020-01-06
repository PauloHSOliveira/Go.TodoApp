import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Bar from '../components/Bar';
import ButtonAdd from '../components/ButtonAdd';
import DontLists from '../components/DontLists';

import api from '../services/api';

import Styles from './styles/styles';

Icon.loadFont();

export default function MenuList({ navigation }) {
    const [load, setLoad] = useState(false);
    const [lists, setLists] = useState([]);

    useEffect(() => {
        async function loadLists() {
            const id = await AsyncStorage.getItem('user');
            const response = await api.get('/lists', {
                headers: { user_id: id },
            });
            setLoad(true);
            setLists(response.data);
        }

        loadLists();
    }, []);

    function handleSubmit(id) {
        navigation.navigate('List', { id });
    }

    if (lists.length === 0) {
        return (
            <View style={styles.container}>
                <Bar />
                <DontLists />
                <ButtonAdd />
            </View>
        );
    }

    if (!load) {
        return (
            <View style={Styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Bar />
            <FlatList
                style={styles.list}
                data={lists}
                showsVerticalScrollIndicator={false}
                // eslint-disable-next-line no-underscore-dangle
                keyExtractor={list => list._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            backgroundColor: item.color,
                            height: 100,
                            width: 350,
                            maxWidth: 450,
                            alignSelf: 'center',
                            marginTop: 20,
                            borderRadius: 5,
                        }}
                        // eslint-disable-next-line no-underscore-dangle
                        onPress={() => handleSubmit(item._id)}
                    >
                        <Text style={styles.title}>{item.name}</Text>
                        <View style={styles.dates}>
                            <View>
                                <View style={styles.datesitem}>
                                    <Text style={styles.titleDate}>
                                        Início -{' '}
                                    </Text>
                                    <Text>{item.initDate}</Text>
                                </View>
                                <View style={styles.datesitem}>
                                    <Text style={styles.titleDate}>Fim - </Text>
                                    <Text>{item.endDate}</Text>
                                </View>
                            </View>
                            <Icon
                                name="ios-notifications-outline"
                                size={30}
                                style={styles.icon}
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
            <ButtonAdd />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        fontWeight: 'bold',
        alignContent: 'center',
        alignSelf: 'center',
    },

    datesitem: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 10,
    },

    dates: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },

    icon: {
        marginRight: 20,
    },
});
