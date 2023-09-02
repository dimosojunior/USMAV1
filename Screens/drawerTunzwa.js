import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {DrawerItemList,createDrawerNavigator} from '@react-navigation/drawer';

// import AboutStack from './aboutStack';
// import HomeStack from './homeStack';
import {NavigationContainer, DarkTheme,DefaultTheme} from '@react-navigation/native';

import Header from '../Shared/header';
import Home from '../Screens/HomeScreen';
import HomeStack from '../Stack/HomeStack';
import ProfileStack from '../Stack/ProfileStack';
import AboutStack from '../Stack/AboutStack';
import LoginStack from '../Stack/LoginStack';
import SettingsStack from '../Stack/SettingsStack';
import AddUniversityStack from '../Stack/AddUniversityStack';

import Welcome from '../Screens/WelcomeScreen';
import RoutesStack from '../Stack/RoutesStack';

import { StyleSheet,Image,Switch, Text, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome} from '@expo/vector-icons';



import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';


const Drawer = createDrawerNavigator();
function MyDrawer({navigation}){

  const {width,height} = Dimensions.get('window');

  const [darkMode, setdarkMode] = useState(false)
  //const theme = useContext(themeContext)




  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setdarkMode(data)
      console.log(data)
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])


  return(


<themeContext.Provider value={darkMode === true ? theme.light : theme.dark}>
     <NavigationContainer theme={darkMode === true ? DefaultTheme : DarkTheme}>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <View style={{
                // backgroundColor: 'rgb(5,5,49)',
              }}>
                <View
                  style={{
                    // height: height,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1,
                    marginBottom:20,
                    
                  }}
                >
                  <Image
                    source={require('../assets/10243.png')}
                    style={{
                      height: 160,
                      width: '90%',
                      borderRadius: 10,
                      marginBottom:10,
                      marginTop:10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 25,
                      marginBottom: 10,
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >MyApp</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "red"
                    }}
                  >Welcome To MyApp</Text>
                </View>





                <DrawerItemList {...props} />
             





                <View style={{
                    
                    width: '100%',
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1,
                    marginTop:50,

                  }}>
                  <Text style={{
                    color:'red',
                    fontSize:16,
                    fontWeight:'bold'
                  }}>Change Theme</Text>
                 <Switch 

          value={darkMode}
          color='red'
          size={50}
          
          

          onValueChange={(value) => {setdarkMode(value);
            EventRegister.emit('ChangeTheme', value)
          }}
          // style={{
          //   width:200
          // }}
          />
                </View>



              





              </View>
            )
          }
        }
        screenOptions={{
        headerShown:false,
          drawerStyle: {
            // backgroundColor: "red",
            backgroundColor: 'rgb(5,5,49)',
            width: 280
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "white",
            fontSize:18,
          }
        }}
      >
      <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <MaterialIcons name="home" size={20} color="#808080" />
            )
          }}
          component={HomeStack}
        />
        <Drawer.Screen
          name="Add University"
          options={{
            drawerLabel: "Sign Up",
            title: "Timer",
            drawerIcon: () => (
              <FontAwesome name="sign-in" size={20} color="#808080" />
            )
          }}
          component={AddUniversityStack}
        />
        <Drawer.Screen
          name="Profile"
          options={{
            drawerLabel: "Profile",
            title: "Profile",
            drawerIcon: () => (
              <MaterialIcons name="category" size={20} color="#808080" />
            )
          }}
          component={ProfileStack}
        />
        <Drawer.Screen
          name="About"
          options={{
            drawerLabel: "About",
            title: "About",
            drawerIcon: () => (
              <FontAwesome name="user-secret" size={20} color="#808080" />
            )
          }}
          component={AboutStack}
        />
        <Drawer.Screen
          name="Welcome"
          options={{
            drawerLabel: "Welcome",
            title: "Welcome",
            drawerIcon: () => (
              <FontAwesome name="sign-in" size={20} color="#808080" />
            )
          }}
          component={Welcome}
        />



            <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: () => (
              <MaterialIcons name="settings" size={20} color="#808080" />
            )
          }}
          component={SettingsStack}
        />


            <Drawer.Screen
          name="Login"
          options={{
            drawerLabel: "Login",
            title: "Login",
            drawerIcon: () => (
              <Ionicons name="log-in-outline" size={20} color="#808080" />
            )
          }}
          component={LoginStack}
        />




        <Drawer.Screen
          name="Routes"
          options={{
            drawerLabel: "Routes",
            title: "Routes",
            drawerIcon: () => (
              <FontAwesome name="sign-in" size={20} color="#808080" />
            )
          }}
          component={RoutesStack}
        />

  




{/*<Switch 

value={darkMode}
onValueChange={(value) => {setdarkMode(value);
  EventRegister.emit('ChangeTheme', value)
}}
/>*/}









      
      </Drawer.Navigator>
    </NavigationContainer>
    </themeContext.Provider>
    

    );
}
export default MyDrawer;




const styles = StyleSheet.create({
    menuicon: { 

       // color:'black', 
        


    },

     });