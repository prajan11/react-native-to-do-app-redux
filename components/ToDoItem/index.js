import React,{useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';

import {deleteToDoTask, setEditToDoTask, markToDoTaskComplete} from '../../redux/actions/index';

const ToDoItem = ({ id, taskName, editTaskId, deleteToDoTask, setEditToDoTask, markToDoTaskComplete}) => { 
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    // console.log(props);
    const handleTaskDelete = (id) => {
        deleteToDoTask(id);
    }

    const handleTaskEdit = (id) => {
        setEditToDoTask(id);
    }

    const toggleCheckBoxHandler = (id, status) => {
        console.log(status);
        markToDoTaskComplete({id, status});
        setToggleCheckBox(status);
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.taskNameContainer}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={() => toggleCheckBoxHandler(id, !toggleCheckBox)}
                />
                  
                <Text style={styles.taskName}> 
                    {taskName}
                </Text>
                
            </View>
            
            <View style={styles.editDeleteButtonContainer}>
                <Pressable onPress={() => handleTaskEdit(id)}> 
                    <FontAwesome5Icon name="edit" size={30} color="green" />
                    
                </Pressable>
                
                <Pressable onPress={()=>handleTaskDelete(id)}> 
                    <AntDesign name="delete" size={27} color="red" style={editTaskId != "" ? {display: 'none'}:''} />
                </Pressable> 
            </View>
        </View>
     );
}

const mapStateToProps = (state) => {
    return {
        editTaskId : state.todoRootReducer.editTaskId,
    }
}

const mapDispatchToProps = { 
    deleteToDoTask, setEditToDoTask, markToDoTaskComplete 
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
 