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

import AllRoutes from '../Routes/AllRoutesScreen';
import ViewRoute from '../Routes/ViewRouteScreen';


const Stack = createStackNavigator();

function RoutesStack( {naigation}){
  return (
  //kama unatumia drawer navigator na stack navigator haina haja ya kus
  //sorround hii stack.navigator na NavigationContainer ila km unatumia
  //stack navigation peke yake basi tumia NavigationContainer

// <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Routes Stack"
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
      name="Routes Stack"
      component={AllRoutes}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

      <Stack.Screen
      name="View Route"
      component={ViewRoute}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />






      </Stack.Navigator>
      	// </NavigationContainer>

    );
  }
  export default RoutesStack;