import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import goTodoapp from '../assets/goTodoApp.png';

Icon.loadFont();

function Bar() {
    return (
        <View style={styles.bar}>
            <Image source={goTodoapp} style={styles.logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        alignSelf: 'stretch',
        height: 100,
        shadowColor: '#18F2E5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginTop: 30,
    },
});

export default withNavigation(Bar);
