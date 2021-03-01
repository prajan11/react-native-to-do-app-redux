import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '80%',
        marginTop: '20%',
        marginLeft: '10%',
        borderWidth: 3,
        borderColor: 'blue',
        borderRadius: 10,
    },
    inputField: {
        height: 40, 
        borderColor: 'black',
        borderWidth: 2,
        width: '90%',
        marginLeft: '5%',
        marginTop: '5%',
        marginBottom: '5%',
        fontSize: 19,
    },
    button: {
        width: '90%',
        marginLeft: '5%',
        borderRadius: 15,
        alignItems: 'center',
        padding: 5,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        letterSpacing:5,
    },
    addButton: {
        backgroundColor: 'blue',
    },
    editButton: {
        backgroundColor: 'green',
    }
  
});

export default styles;