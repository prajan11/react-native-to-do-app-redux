import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf:'center',
        flexDirection: 'row',
    },
    inputField: {
        height: 40, 
        width: '80%',
        fontSize: 18,
        borderRadius: 40,
        backgroundColor: 'white',
        paddingLeft: 20,
        marginTop: 5
    },
    button: {
        width:50,
        height: 50,
        marginLeft: '5%',
        borderRadius: 25,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText: {
        fontSize: 10,
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