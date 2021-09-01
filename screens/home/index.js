/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import ToDoForm from '../../components/ToDoForm';
import ToDoList from '../../components/ToDoList';




const App: () => React$Node = () => {
  const [enteredTask, setEnteredTask] = useState("");
  const [taskLists, setEnteredTaskList] = useState([]);  //reducer
  const [editStatus, setEditStatus] = useState(false);
  const [editTask, setEditTask] = useState(null);


  // const handleTaskList = () => {
  //   setEnteredTaskList((taskLists) => [...taskLists, {id: uuid(), taskName:enteredTask}]);
  //   setEnteredTask("");
  // }

  const handleTaskUpdate = (id) => {
      const taskListsCopy = taskLists;

      taskListsCopy.map( (task) => {
        if(task.id === id){
          task.taskName = editTask.taskName; 
        }
        return task;
      });


      setEnteredTaskList(taskListsCopy);
      setEnteredTask("");
      setEditStatus(false);
      setEditTask(null);
  }

  const deleteTaskFromTaskList = (id) => {
    
    let taskListsCopy = taskLists;
    

    taskListsCopy = taskListsCopy.filter( (task) => {
        return task.id !== id;
     
    });

    setEnteredTaskList(taskListsCopy);
  }

  const handleTaskEdit = (id) => {
      setEditStatus(true);
      const editTask = taskLists.filter( (task) => {
        return task.id === id;
      })[0];
      setEditTask(editTask);
  }

  // const handleTaskFieldChange = (text) => {
  //   if(editStatus){
  //     setEditTask({...editTask, taskName: text})
  //   }
  //   else{
  //     setEnteredTask(text);
  //   }
    
  // }

  return (

      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background_image.jpg')} style={styles.backgroundImage} />
        <View style={styles.header}>
          <Text style={styles.headerText}>
            To Do App
          </Text>
        </View>
      
        <ToDoForm taskTextValue={enteredTask} editButtonClickHandler={handleTaskUpdate} editStatus={editStatus} editTask={editTask} />

        <ToDoList tasks = {taskLists} editTaskHandler={handleTaskEdit} deleteTaskHandler={deleteTaskFromTaskList} editStatus={editStatus} />
        
      </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    position: 'absolute',
    width: '100%',
    alignItems:'center',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#0048bd',
  },
  headerText: {
    fontSize: 22,
    letterSpacing: 5,
    color: 'white'
  },  
  backgroundImage:{
    height: '100%',
    width:'100%',
    resizeMode: 'cover',
  },
  
  
});

export default App;
