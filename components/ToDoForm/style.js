import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '80%',
        left: '10%',
        bottom: '5%',
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
        width: '20%',
        height: 80,
        marginLeft: '5%',
        textAlign: 'center',
        borderRadius: 70,
        paddingTop: 15
    },
    buttonText: {
        fontSize: 35,
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