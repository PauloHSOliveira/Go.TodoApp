import React from 'react';
import { AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

function ButtonAdd({ navigation }) {
    async function handleSubtmit() {
        await AsyncStorage.removeItem('user');

        navigation.navigate('Login');
    }

    async function addNewList() {
        navigation.navigate('addList');
    }

    return (
        <ActionButton buttonColor="rgba(151,229,239,1)">
            <ActionButton.Item
                buttonColor="#B2FFC8"
                title="Nova Lista"
                onPress={addNewList}
            >
                <Icon name="md-create" size={20} color="#fff" height={22} />
            </ActionButton.Item>
            <ActionButton.Item
                buttonColor="#FFB2B2"
                title="Logout"
                onPress={handleSubtmit}
            >
                <Icon name="ios-exit" size={20} color="#fff" height={22} />
            </ActionButton.Item>
        </ActionButton>
    );
}

export default withNavigation(ButtonAdd);
