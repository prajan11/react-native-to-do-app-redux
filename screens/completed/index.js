import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import ToDoItem from '../../components/ToDoItem';


const CompletedTasksScreen = ({completedTasks}) => {
    return ( 
        <ImageBackground source={require('../../assets/images/background_image.jpg')} style={styles.backgroundImageContainer}>

          <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false} contentContainerStyle={styles.activeTasksContainer}>
            {completedTasks.map((completedTask) => <ToDoItem key={completedTask.id} taskName={completedTask.taskName} type={'completed'} />)}
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
    completedTasks : state.todoRootReducer.todo.filter((item) => item.completed === true),
  }
}
 
export default connect(mapStateToProps, null)(CompletedTasksScreen);