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
import AccountStack from '../Stack/AccountStack';
import SettingsStack from '../Stack/SettingsStack';
import AddUniversityStack from '../Stack/AddUniversityStack';

import Welcome from '../Screens/WelcomeScreen';
import RoutesStack from '../Stack/RoutesStack';

import { StyleSheet,Image,Switch,Dimensions,ScrollView, Text, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome} from '@expo/vector-icons';



import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';


const Drawer = createDrawerNavigator();
function MyDrawer({navigation}){

  const {width,height} = Dimensions.get('window');

// const theme = useContext(themeContext)
  const [darkMode, setdarkMode] = useState(false)
  


   const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);





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
              <ScrollView>
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
                    marginBottom:12,
                    
                  }}
                >
                  <Image
                    source={require('../assets/u1.png')}
                    style={{
                      height: 160,
                      width: '90%',
                      borderRadius: 10,
                      marginBottom:10,
                      marginTop:10,
                    }}
                  />

   </View>


                  <View style={{
                    
                    width: '100%',
                    flexDirection:"row",
                    justifyContent: "space-between",
                    alignItems: "center",

                    // borderBottomColor: "#f4f4f4",
                    // borderBottomWidth: 1,
                    // borderTopColor: "black",
                    // borderTopWidth: 1,
                    // marginTop:30,
                    // paddingRight:20,
                    paddingBottom:20,
                    paddingHorizontal:10,

                  }}>
                  <Text
                    style={{
                      fontSize: 22,
                      // marginBottom: 10,
                      fontWeight: "bold",
                      color: "blue",
                      // paddingBottom: 20,
                      
                    }}
                  >USMA APP</Text>


                  <Switch 

      //          <Switch
      //   trackColor={{ false: '#767577', true: '#81b0ff' }}
      //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      //   ios_backgroundColor="#3e3e3e"
      //   onValueChange={toggleSwitch}
      //   value={darkMode}
      //   style={{ transform: [{ scale: 1.5 }] }}
      // />

          value={darkMode}
          trackColor={{ false: 'red', true: 'green' }}
          thumbColor={isEnabled ? 'red' : 'purple'}
          style={{ transform: [{ scale: 1.3 }] }}
          
          
          onValueChange={(value) => {setdarkMode(value);
            EventRegister.emit('ChangeTheme', value)
          }}
          // style={{
          //   width:200
          // }}
          />

</View>


                  
             







                <DrawerItemList {...props} />
             





              





              </View>
              </ScrollView>
            )
          }
        }
        screenOptions={{
        headerShown:false,
          drawerStyle: {
            // backgroundColor: 'rgb(5,5,49)',
            backgroundColor: '#F0F0F0',
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
            color: "black",
            fontSize:16,

          },
          // drawerIconStyle: {
          //   color: "white",
          //   fontSize:16,
          //   border:4,
          //   borderColor:'red',

          // }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                border:2,
                borderColor:'black',
                borderWidth:2,
                padding:7,
                borderRadius:6,
              }}>
              <MaterialIcons name="home" size={40} color="green" />
              </View>
            )
          }}
          component={HomeStack}
        />


 <Drawer.Screen
          name="About Us"
          options={{
            drawerLabel: "About Us",
            title: "About Us",
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                border:2,
                borderColor:'black',
                borderWidth:2,
                padding:7,
                borderRadius:6,
              }}>
              <FontAwesome name="sign-in" size={40} color="green" />
              </View>
            )
          }}
          component={AboutStack}
        />


     <Drawer.Screen
          name="Signin"
          options={{
            drawerLabel: "Signin",
            title: "Signin",
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                border:2,
                borderColor:'black',
                borderWidth:2,
                padding:7,
                borderRadius:6,
              }}>
              <FontAwesome name="user-secret" size={40} color="green" />
              </View>
            )
          }}
          component={AccountStack}
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