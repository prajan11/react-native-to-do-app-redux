import React from 'react';
import { View, Text } from 'react-native';
import ToDoItem from '../ToDoItem';
import styles from './style';

const ToDoList = ({tasks, editTaskHandler, deleteTaskHandler, editStatus}) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.taskListHeading}>   
                <Text style={styles.taskListText}>Task Lists</Text>       
            </View>

            {tasks.map( (task) => {
                return <ToDoItem key={task.id} taskName={task.taskName} editTaskHandler={editTaskHandler} id={task.id} deleteTaskHandler={deleteTaskHandler} editStatus={editStatus} />;
            })}

            {/* <ToDoItem /> */}

        </View>
     );
}
 
export default ToDoList;