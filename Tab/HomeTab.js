import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from '../Shared/header';

import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/HomeScreen';
import Qrcode from '../Screens/QrcodeScreen';
import AllHob from '../Hob/AllHobScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons, FontAwesome, FontAwesome5} from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function HomeTab( {naigation}){
  return (
  //kama unatumia drawer navigator na stack navigator haina haja ya kus
  //sorround hii stack.navigator na NavigationContainer ila km unatumia
  //stack navigation peke yake basi tumia NavigationContainer

// <NavigationContainer>
    <Tab.Navigator
          screenOptions={({route}) =>({
      	headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor:"black",
           //height:200,


        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'white',
        // tabBarIcon:({focused, color, size}) =>{
        //   let iconName;
        //   if (route.name === 'HomeTab'){
        //     iconName = focused ? 'home' : 'home-outline'
        //   }
        //   else if (route.name === 'Qrcode') {
        //     iconName = focused ? 'qr-code' : 'qr-code-outline'

        //   }
        //   return <MaterialIcons name={iconName} size={focused? 35: size} color="white" />

        // }
        

      })}
      >
      
      <Tab.Screen
      name="Home Tab"
      component={Home}
      options={{
        title:"Home Tab",
        tabBarIcon: ({focused}) => (
            <MaterialIcons  
            name="home"
            size={focused ? 35 :35}
            color={focused ? 'red' : 'white'}

            />

            ),
      }}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='Smart Invigilation App' />,
      //     })}
      />


   



          <Tab.Screen
      name="All Hob"
      component={AllHob}
      options={{
        title:"All Hob Page",
        tabBarIcon: ({focused}) => (
            <FontAwesome5  
            name="user-graduate"
            size={focused ? 35 :35}
            color={focused ? 'red' : 'white'}

            />

            ),
      }}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='Smart Invigilation App' />,
      //     })}
      />


     



      </Tab.Navigator>
      	// </NavigationContainer>

    );
  }
  export default HomeTab;