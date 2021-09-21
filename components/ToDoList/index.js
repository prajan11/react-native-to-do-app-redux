import React from 'react';
import { View} from 'react-native';
import ToDoItem from '../ToDoItem';
import styles from './style';
import {connect} from 'react-redux';


const ToDoList = ({ toDos}) => {
    return ( 
        <View style={styles.container}>
            {toDos.map( (task) => {
                return <ToDoItem key={task.id} id={task.id} taskName={task.taskName} completed={task.completed} />;
            })}    
        </View>
     );
}

const mapStateToProps = (state) => {
    return {
        toDos : state.todoRootReducer.todo,
    }
}

 
export default connect(mapStateToProps, null)(ToDoList);