import React, { useState, useEffect } from 'react';
import {
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
import api from '../services/api';

Icon.loadFont();

export default function MenuList() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        async function loadLists() {
            const id = await AsyncStorage.getItem('user');
            const response = await api.get('/lists', {
                headers: { user_id: id },
            });

            setLists(response.data);
        }

        loadLists();
    }, []);

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
                            alignSelf: 'center',
                            marginTop: 20,
                            borderRadius: 5,
                        }}
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
