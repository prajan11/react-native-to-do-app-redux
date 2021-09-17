import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '80%',
        marginTop: '5%',
        marginLeft: '10%',
    },
    taskListHeading:{
        textAlign: 'left',
        marginBottom: 35,
    },
    taskListText: {
        fontSize: 27,
        color: 'black',
        fontWeight: 'bold',
        letterSpacing: 1,
    }
});

export default styles;