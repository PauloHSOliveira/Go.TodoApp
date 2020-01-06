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
        width: 110,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
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

    textlist: {
        fontWeight: 'bold',
        color: '#999',
    },

    colorPicker: {
        height: 30,
        width: 30,
        borderRadius: 50,
        margin: 10,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
    },
});

export default Styles;
