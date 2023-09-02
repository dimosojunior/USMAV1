import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Header from '../Shared/header';
import Home from '../Screens/HomeScreen';
import ViewDetail from '../Screens/ViewDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../Screens/LoginScreen';
import Signup from '../Screens/SignupScreen';
import ViewProfile from '../Screens/ViewProfileScreen';

const Stack = createStackNavigator();

function AccountStack( {naigation}){
  return (
  //kama unatumia drawer navigator na stack navigator haina haja ya kus
  //sorround hii stack.navigator na NavigationContainer ila km unatumia
  //stack navigation peke yake basi tumia NavigationContainer

// <NavigationContainer>
    <Stack.Navigator
    // initialRouteName="Login Stack"
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
      name="Login Stack"
      component={Login}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='Login Page' />,
      //     })}
      />

 <Stack.Screen
      name="Signup Stack"
      component={Signup}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='Login Page' />,
      //     })}
      />
     


      </Stack.Navigator>
      	// </NavigationContainer>

    );
  }
  export default AccountStack;