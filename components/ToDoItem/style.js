import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 7,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 15
    },
    taskNameContainer:{
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    taskName: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 15
    },
    editDeleteButtonContainer: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
    },
    

});

export default styles;