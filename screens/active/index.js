import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {connect} from 'react-redux';
import ToDoItem from '../../components/ToDoItem';


const ActiveTasksScreen = ({activeTasks}) => {
    console.log(activeTasks);
    return ( 
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background_image.jpg')} style={styles.backgroundImage} />

        <View style={styles.container_inside}>
          {activeTasks.map((activeTask) => <ToDoItem key={activeTask.id} taskName={activeTask.taskName} type={'active'} />)}
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
      activeTasks : state.todoRootReducer.todo.filter((item) => item.completed === false),
  }
}
 
export default connect(mapStateToProps, null)(ActiveTasksScreen);