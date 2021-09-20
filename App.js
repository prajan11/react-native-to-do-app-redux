import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import configureStore from './redux/store';
import HomeScreen from './screens/home';
import ActiveTasksScreen from './screens/active';
import CompletedTasksScreen from './screens/completed';


const {store, persistor} = configureStore();
const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator 
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
    
                if (route.name === 'All') {
                  return <FontAwesome name={'list-ul'} size={size} color={color} />;
                } else if (route.name === 'Active') {
                  return <Ionicons name={'list-circle-outline'} size={size} color={color} />;
                }
                else if (route.name === 'Completed') {
                  return <MaterialIcons name={'playlist-add-check'} size={size} color={color} />;
                }
    
                // You can return any component that you like here!
                
              },
              activeTintColor: '#000',
              inactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="All" component={HomeScreen} options={{
                                                                    title: 'All Tasks',
                                                                    headerStyle: {
                                                                      backgroundColor: 'royalblue'
                                                                    },
                                                                    headerTintColor: '#fff',
                                                                    headerTitleAlign: 'center',
                                                                    headerTitleStyle: {
                                                                      fontWeight: 'bold',
                                                                      alignSelf: 'center',
                                                                      fontSize: 28
                                                                      
                                                                    }}} />
            <Tab.Screen name="Active" component={ActiveTasksScreen} options={{
                                                                    title: 'Active Tasks',
                                                                    headerStyle: {
                                                                      backgroundColor: '#037ffc'
                                                                    },
                                                                    headerTintColor: '#fff',
                                                                    headerTitleAlign: 'center',
                                                                    headerTitleStyle: {
                                                                      fontWeight: 'bold',
                                                                      fontSize: 28
                                                            
                                                                    }}} />
            <Tab.Screen name="Completed" component={CompletedTasksScreen} options={{
                                                                    title: 'Completed Tasks',
                                                                    headerStyle: {
                                                                      backgroundColor: '#037ffc'
                                                                    },
                                                                    headerTintColor: '#fff',
                                                                    headerTitleAlign: 'center',
                                                                    headerTitleStyle: {
                                                                      fontWeight: 'bold',
                                                                      fontSize: 28
                                                                    }}}  />
          </Tab.Navigator>
        </NavigationContainer> 
      </PersistGate>
    </Provider>
  );
};

export default App;