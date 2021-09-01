import React from 'react';
import { View, Text } from 'react-native';
import ToDoItem from '../ToDoItem';
import styles from './style';
import {connect} from 'react-redux';


const ToDoList = ({ editTaskHandler, editStatus, toDos}) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.taskListHeading}>   
                <Text style={styles.taskListText}>Task Lists</Text>       
            </View>

            {toDos.map( (task) => {
                return <ToDoItem key={task.id} id={task.id} taskName={task.taskName}  editTaskHandler={editTaskHandler}  editStatus={editStatus} />;
            })}

            {/* <ToDoItem /> */}

        </View>
     );
}

const mapStateToProps = (state) => {
    return {
        toDos : state.todoRootReducer.todo,
    }
}

 
export default connect(mapStateToProps, null)(ToDoList);