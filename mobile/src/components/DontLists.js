import React from 'react';
import { View, Text, Image } from 'react-native';

import Styles from '../pages/styles/styles';

import illustration from '../assets/illustration.png';

export default function DontList() {
    return (
        <View>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 150,
                    ...Styles.form,
                }}
            >
                <Image source={illustration} style={Styles.logo} />
                <Text style={Styles.textlist}>
                    {'Você ainda não criou uma lista,\n' +
                        '         ' +
                        'clique em + para criar.'}
                </Text>
            </View>
        </View>
    );
}
