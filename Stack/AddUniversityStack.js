import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Header from '../Shared/header';
import Home from '../Screens/HomeScreen';
import ViewDetail from '../Screens/ViewDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import About from '../Screens/AboutScreen';
import ViewProfile from '../Screens/ViewProfileScreen';
import AddUniversity from '../Screens/AddUniversityScreen';
const Stack = createStackNavigator();

function AddUniversityStack( {naigation}){
  return (
  //kama unatumia drawer navigator na stack navigator haina haja ya kus
  //sorround hii stack.navigator na NavigationContainer ila km unatumia
  //stack navigation peke yake basi tumia NavigationContainer

// <NavigationContainer>
    <Stack.Navigator
    initialRouteName="About Stack"
      screenOptions={{
      	headerShown:false,
        headerStyle:{
          backgroundColor:"green",
           //height:100,

        },
        headerTintColor:"white",
        headerTitleStyle: {
              fontWeight: 'bold',
            },
      }}
      >
      
      <Stack.Screen
      name="AddUniversity Stack"
      component={AddUniversity}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

     


      </Stack.Navigator>
      	// </NavigationContainer>

    );
  }
  export default AddUniversityStack;