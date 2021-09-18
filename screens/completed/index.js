import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {connect} from 'react-redux';
import ToDoItem from '../../components/ToDoItem';


const CompletedTasksScreen = ({completedTasks}) => {
    return ( 
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background_image.jpg')} style={styles.backgroundImage} />

        <View style={styles.container_inside}>
          {completedTasks.map((completedTask) => <ToDoItem key={completedTask.id} taskName={completedTask.taskName} type={'completed'} />)}
        </View>
        
       
        
      </View> 
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_inside: {
    flex: 1,
    position: 'absolute',
    width: '80%',
    marginTop: '5%',
    marginLeft: '10%',
  },
  backgroundImage:{
    height: '100%',
    width:'100%',
    resizeMode: 'cover',
  },
    
});

const mapStateToProps = (state) => {
  return {
    completedTasks : state.todoRootReducer.todo.filter((item) => item.completed === true),
  }
}
 
export default connect(mapStateToProps, null)(CompletedTasksScreen);