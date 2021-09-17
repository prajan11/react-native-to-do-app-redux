import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const ActiveTasksScreen = () => {
    return ( <View>
        <ImageBackground source={require('../../assets/images/background_image.jpg')} style={styles.backgroundImage} />
        <Text>Active Tasks Screen</Text>
    </View>  );
}

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
 
export default ActiveTasksScreen;