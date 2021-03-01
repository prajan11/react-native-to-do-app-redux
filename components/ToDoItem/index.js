import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ToDoItem = ({id, taskName, editTaskHandler, deleteTaskHandler, editStatus}) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.taskNameContainer}>
                
                    <Text style={styles.taskName}> 
                        {taskName}
                    </Text>
                
            </View>
            
            <View style={styles.editDeleteButtonContainer}>
                <Pressable onPress={() => editTaskHandler(id)}> 
                    <FontAwesome5Icon name="edit" size={22} color="green" />
                    
                </Pressable>
                
                <Pressable onPress={() => deleteTaskHandler(id)}> 
                    <AntDesign name="delete" size={20} color="red" style={editStatus? {display: 'none'}:''} />
                </Pressable> 
            </View>
        </View>
     );
}
 
export default ToDoItem;