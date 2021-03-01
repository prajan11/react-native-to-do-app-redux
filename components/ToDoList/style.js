import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '80%',
        marginTop: '70%',
        marginLeft: '10%',
        borderRadius: 15,
        borderWidth: 5,
        borderColor: 'teal',
    },
    taskListHeading:{
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: 'teal',
    },
    taskListText: {
        fontSize: 20,
        color: 'white',
    }
});

export default styles;