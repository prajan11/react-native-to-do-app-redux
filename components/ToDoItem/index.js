import React,{useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import {connect} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';

import {deleteToDoTask, setEditToDoTask, markToDoTaskComplete} from '../../redux/actions/index';

const ToDoItem = ({ id, taskName, editTaskId, deleteToDoTask, setEditToDoTask, markToDoTaskComplete, type, completed}) => { 
    const [toggleCheckBox, setToggleCheckBox] = useState(completed);
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
        <View style={type === 'active' || type === 'completed' ? [styles.container, styles.containerExtra] : styles.container}>
            <View style={type === 'active' || type === 'completed' ? [styles.taskNameContainer, styles.taskNameContainerExtra] : styles.taskNameContainer}>
                {type ? (type === 'active' ? 
                                            <MaterialIcons name="pending-actions" size={25} color="green" /> 
                                            : 
                                            <FontAwesome5Icon name="check" size={25} color="green" />
                                            ) : 

                                            <CheckBox
                                                disabled={false}
                                                value={toggleCheckBox}
                                                onValueChange={() => toggleCheckBoxHandler(id, !toggleCheckBox)}
                                            />
                }
                
                  
                <Text style={type === 'active' || type === 'completed' ? [styles.taskName, styles.taskNameExtra] : styles.taskName}> 
                    {taskName}
                </Text>
                
            </View>
            
            {type ? <Text></Text> : 
                        <View style={styles.editDeleteButtonContainer}>
                            <Pressable onPress={() => handleTaskEdit(id)}> 
                                <FontAwesome5Icon name="edit" size={24} color="green" />
                                
                            </Pressable>
                            
                            <Pressable onPress={()=>handleTaskDelete(id)}> 
                                <AntDesign name="delete" size={22} color="red" style={editTaskId != "" ? {display: 'none'}:''} />
                            </Pressable> 
                        </View>
            }
            
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
 