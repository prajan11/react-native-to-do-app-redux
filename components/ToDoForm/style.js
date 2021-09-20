import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf:'center',
        flexDirection: 'row',
    },
    inputField: {
        height: 60, 
        width: '80%',
        fontSize: 19,
        borderRadius: 40,
        backgroundColor: 'white',
        paddingLeft: 25,
        marginTop: 10
    },
    button: {
        width: '16%',
        height: 75,
        marginLeft: '5%',
        textAlign: 'center',
        borderRadius: 50,
        paddingTop: 15
    },
    buttonText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    addButton: {
        backgroundColor: 'green',
    },
    editButton: {
        backgroundColor: 'teal',
    }
  
});

export default styles;