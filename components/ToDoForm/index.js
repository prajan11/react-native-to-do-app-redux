import React, {useState, useEffect} from 'react';
import { Pressable, Text, TextInput, View, ImageBackground } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import {addTodoData, editToDoTask} from '../../redux/actions/index';
import {connect}  from 'react-redux';



const ToDoForm = ({addTodoData, editTaskId, toDos, editToDoTask}) => {

    const [enteredTask, setEnteredTask] = useState("");

    useEffect(() => {
        if(editTaskId != ""){
            const editTaskName = toDos.find((item) => item.id === editTaskId);
            setEnteredTask(editTaskName.taskName);
        }
    }, [editTaskId]);

    const handleTaskFieldChange = (text) => {
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
                value={enteredTask}
                placeholder="Write a task"
                />
        
            <View style={[styles.button, editTaskId != "" ? styles.editButton : styles.addButton]}>

                {
                    editTaskId.length > 0 ?    <Pressable onPress={() => updateButtonClickHandler(editTaskId)} disabled={enteredTask.length > 0 ? false : true}> 
                                        <Text style={styles.buttonText}>
                                            <AntDesign name='edit' size={25} color="white" />
                                        </Text>
                                    </Pressable>     
                                : 
                                    <Pressable onPress={() => handleAddTask()} disabled={enteredTask.length > 0 ? false : true}> 
                                        <Text style={styles.buttonText}>
                                            <FontAwesome5 name='plus' size={25} color="white" />
                                        </Text>
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