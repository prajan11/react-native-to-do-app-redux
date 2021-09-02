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
  

  return (

      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background_image.jpg')} style={styles.backgroundImage} />
        <View style={styles.header}>
          <Text style={styles.headerText}>
            To Do App
          </Text>
        </View>
       

        <ToDoList />
        <ToDoForm />

       
        
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
