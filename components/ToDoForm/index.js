import React, {useState, useEffect} from 'react';
import { Button, Pressable, Text, TextInput, View } from 'react-native';
import styles from './style';
import {addTodoData, editToDoTask} from '../../redux/actions/index';
import {connect}  from 'react-redux';



const ToDoForm = ({addTodoData, editTaskId, toDos, editToDoTask}) => {

    const [enteredTask, setEnteredTask] = useState("");
    const [editTask, setEditTask] = useState("");

    useEffect(() => {
        if(editTaskId != ""){
            const editTaskName = toDos.filter((item) => item.id === editTaskId);
            setEnteredTask(editTaskName[0].taskName);
        }
    }, [editTaskId]);

    const handleTaskFieldChange = (text) => {
          console.log(text);
          setEnteredTask(text);
    }

    const handleAddTask = () => {
        addTodoData(enteredTask);
        setEnteredTask("");
    }


    const updateButtonClickHandler = (id) => {
        editToDoTask({enteredTask, id});
        setEnteredTask("");
    }


    return ( 
        <View style={styles.container}>
            <TextInput
                style={ styles.inputField}
                onChangeText={(text) => handleTaskFieldChange(text)}
                value={enteredTask} />
        
            <View style={[styles.button, editTaskId != "" ? styles.editButton : styles.addButton]}>
                {
                    editTaskId.length > 0 ?    <Pressable onPress={() => updateButtonClickHandler(editTaskId)} > 
                                        <Text style={styles.buttonText}>UPDATE TASK</Text>
                                    </Pressable>     
                                : 
                                    <Pressable onPress={() => handleAddTask()}> 
                                        <Text style={styles.buttonText}>ADD TASK</Text>
                                    </Pressable>
                }
                
            </View>
            
        </View>
     );
}

const mapStateToProps = (state) => {
    return {
        editTaskId : state.todoRootReducer.editTaskId,
        toDos : state.todoRootReducer.todo,
    }
}
    

const mapDispatchToProps ={
    addTodoData, editToDoTask
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);