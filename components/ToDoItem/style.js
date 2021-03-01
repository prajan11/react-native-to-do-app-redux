import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        borderWidth: 2,
        borderColor: 'green',
        marginLeft: '10%',
        padding: 7,
        marginBottom: 11,
        backgroundColor: 'white',
        opacity: 0.6,
    },
    editDeleteButtonContainer: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    taskNameContainer:{
        flex: 1,
        justifyContent: 'flex-start',
    },
    taskName: {
        fontSize: 15,
        fontWeight: 'bold'
    }
    

});

export default styles;