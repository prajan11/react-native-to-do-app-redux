import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect, useDispatch} from 'react-redux';

import {deleteToDoTask, setEditToDoTask} from '../../redux/actions/index';

const ToDoItem = ({ id, taskName, editTaskHandler, editStatus, deleteToDoTask, setEditToDoTask}) => {  //ask Dipesh props kept in front task render else not render
    // console.log(props);
    const handleTaskDelete = (id) => {
        deleteToDoTask(id);
    }

    const handleTaskEdit = (id) => {
        setEditToDoTask(id);
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.taskNameContainer}>
                
                    <Text style={styles.taskName}> 
                        {taskName}
                    </Text>
                
            </View>
            
            <View style={styles.editDeleteButtonContainer}>
                <Pressable onPress={() => handleTaskEdit(id)}> 
                    <FontAwesome5Icon name="edit" size={22} color="green" />
                    
                </Pressable>
                
                <Pressable onPress={()=>handleTaskDelete(id)}> 
                {/* <Pressable onPress={() => dispatch({ type: 'increment-counter' })}>  */}
                    <AntDesign name="delete" size={20} color="red" style={editStatus? {display: 'none'}:''} />
                </Pressable> 
            </View>
        </View>
     );
}

const mapDispatchToProps = { 
    deleteToDoTask, setEditToDoTask 
}
 
export default connect(null, mapDispatchToProps)(ToDoItem);
 