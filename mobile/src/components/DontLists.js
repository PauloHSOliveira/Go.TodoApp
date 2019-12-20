import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DontList() {
    return (
        <View styles={styles.container}>
            <Text>Sem lista</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
