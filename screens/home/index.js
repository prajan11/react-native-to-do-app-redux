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
       
        <ToDoList />
        <ToDoForm />
       
        
      </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    height: '100%',
    width:'100%',
    resizeMode: 'cover',
  },
  
  
});

export default App;
