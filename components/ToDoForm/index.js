import React from 'react';
import { Button, Pressable, Text, TextInput, View } from 'react-native';
import styles from './style';

const ToDoForm = ({taskTextValue, buttonClickHandler, editButtonClickHandler, taskTextHandler, editStatus, editTask}) => {
    
    return ( 
        <View style={styles.container}>
            <TextInput
                style={ styles.inputField}
                onChangeText={(text) => taskTextHandler(text)}
                value={editStatus ? editTask.taskName : taskTextValue} />
        
            <View style={[styles.button, editStatus ? styles.editButton : styles.addButton]}>
                {
                    editStatus ?    <Pressable onPress={() => editButtonClickHandler(editTask.id)} disabled={editTask.taskName.length > 0 ? false : true}> 
                                        <Text style={styles.buttonText}>UPDATE TASK</Text>
                                    </Pressable>     
                                : 
                                    <Pressable onPress={() => buttonClickHandler()} disabled={taskTextValue.length > 0 ? false : true}> 
                                        <Text style={styles.buttonText}>ADD TASK</Text>
                                    </Pressable>
                }
                
            </View>
            
        </View>
     );
}
 
export default ToDoForm;