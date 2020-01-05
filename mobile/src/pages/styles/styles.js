import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
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
        borderBottomWidth: 1,
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
        width: 110,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 5,
        marginTop: 20,
        marginRight: 10,
        padding: 10,
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    buttonReturn: {
        backgroundColor: '#FFB2B2',
        width: 110,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 10,
        padding: 10,
        flexDirection: 'row',
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
        width: 110,
        height: 50,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },

    textBtnRegister: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#18F2E5',
    },

    areaBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Styles;
