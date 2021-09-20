import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import ToDoItem from '../../components/ToDoItem';


const ActiveTasksScreen = ({activeTasks}) => {
    return ( 
      <ImageBackground source={require('../../assets/images/background_image.jpg')} style={styles.backgroundImageContainer}>
        <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false} contentContainerStyle={styles.activeTasksContainer}>
            {activeTasks.map((activeTask) => <ToDoItem key={activeTask.id} taskName={activeTask.taskName} type={'active'} />)}
        </ScrollView>
      
      </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
  backgroundImageContainer:{
    flex: 1,
    height: '100%',
    width:'100%',
    resizeMode: 'cover',
  },
  scrollViewContainer: {
    height: '100%',
    width: '100%',
  },
  activeTasksContainer: {
    position: 'absolute',
    width: '85%',
    marginTop: '5%',
    marginLeft: '8%',
    paddingBottom: 70
  }, 
    
});

const mapStateToProps = (state) => {
  return {
      activeTasks : state.todoRootReducer.todo.filter((item) => item.completed === false),
  }
}
 
export default connect(mapStateToProps, null)(ActiveTasksScreen);