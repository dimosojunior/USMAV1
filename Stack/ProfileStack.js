import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Header from '../Shared/header';
import Home from '../Screens/HomeScreen';
import ViewDetail from '../Screens/ViewDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import Profile from '../Screens/ProfileScreen';
import ViewProfile from '../Screens/ViewProfileScreen';

const Stack = createStackNavigator();

function ProfileStack( {naigation}){
  return (
  //kama unatumia drawer navigator na stack navigator haina haja ya kus
  //sorround hii stack.navigator na NavigationContainer ila km unatumia
  //stack navigation peke yake basi tumia NavigationContainer

// <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Profile Stack"
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
      name="Profile Stack"
      component={Profile}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='Profile Page' />,
      //     })}
      />

      <Stack.Screen
      name="Profile Detail Page"
      component={ViewProfile}

      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About App' />,
      //     })}
      />





      </Stack.Navigator>
      	// </NavigationContainer>

    );
  }
  export default ProfileStack;