import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ToDoItem from '../ToDoItem';
import styles from './style';
import {connect} from 'react-redux';


const ToDoList = ({ editTaskHandler, editStatus, toDos}) => {
    return ( 
        <View style={styles.container}>
            {/* <ScrollView style={{flex:1, borderColor: 'red', borderWidth: 5}}> */}
                {toDos.map( (task) => {
                    return <ToDoItem key={task.id} id={task.id} taskName={task.taskName} />;
                })}
            {/* </ScrollView> */}
            
        </View>
     );
}

const mapStateToProps = (state) => {
    return {
        toDos : state.todoRootReducer.todo,
    }
}

 
export default connect(mapStateToProps, null)(ToDoList);