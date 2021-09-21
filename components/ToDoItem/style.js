import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 12,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    containerExtra: {
        padding: 5,
    },
    taskNameContainer:{
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 5,
        paddingTop: 4
    },
    taskNameContainerExtra:{
        paddingTop: 0
    },
    taskName: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingTop: 4
    },
    taskNameExtra: {
        paddingTop: 0,
        paddingLeft: 10
    },
    editDeleteButtonContainer: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
        marginLeft: 30,
        borderColor: 'green'
    },
    

});

export default styles;