/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView
} from 'react-native';
import ToDoForm from '../../components/ToDoForm';
import ToDoList from '../../components/ToDoList';


const App = (props) => {
  const scrollViewRef = useRef(null);
  

  return (

      <View style={styles.container}>

        <ImageBackground source={require('../../assets/images/background_image.jpg')} style={styles.backgroundImage}>
        
          <ScrollView showsVerticalScrollIndicator={false}
                      ref={scrollViewRef}
                      onContentSizeChange={() =>
                        scrollViewRef.current.scrollToEnd({animated: true})
                      }>
            <View style={{paddingBottom:100}}>
              <ToDoList />
            </View>
          </ScrollView>
        </ImageBackground>
        <View style={styles.todoFormContainer}>
          <ToDoForm  />
        </View>      
        
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
    // zIndex: 1
  },
  todoFormContainer : {
    position:'absolute', 
    height:'10%',
    width: '100%',
    bottom:0,  
    alignSelf:'center', 
    padding: 10, 
    borderColor:'#FFF', 
    borderWidth:1,
    backgroundColor: 'royalblue'
    // zIndex: 2,
  }
  
  
});

export default App;
