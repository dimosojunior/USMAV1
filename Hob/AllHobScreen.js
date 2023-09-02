import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { StyleSheet,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';
import {globalstyles} from '../Styles/global';
import Card from '../Shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import useFetch from '../useFetch';
import axios from 'axios';
import Header from '../Shared/header';
// import HomeScreenCard from '../Shared/HomeScreenCard';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MotiView} from 'moti';

import AllMaterials from '../Shared/AllMaterials';
import Articles from '../Shared/Articles';

import { Ionicons, FontAwesome} from '@expo/vector-icons';

import Search from '../Shared/search';

import{LinearGradient} from 'expo-linear-gradient';
import ArticlesHeader from '../Shared/ArticlesHeader';
import HobsPage from '../HobRenderedPage/HobsPage';

//import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

//import {AppLoading} from 'expo';
import * as SplashScreen from 'expo-splash-screen';
//E3E4FA
import {useFonts} from 'expo-font';
//import AppLoading from 'expo-app-loading';



// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';




const AllHob =({navigation}) => {


// To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)


//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);



 // const [allHob, setAllHob] = useState([
 //  {CategoryName:'Websites Developers',CategoryImage:require('../assets/ARTICLES/web.jpeg'),rating:3,id:'1'},
 //  {CategoryName:'Mobile Applications Developers',CategoryImage:require('../assets/ARTICLES/web2.jpeg'),  rating:2,id:'2'},
 //  {CategoryName:'Graphics Designer',CategoryImage:require('../assets/EXPERTS/graphics.jpeg'), rating:2,id:'3'},
 //  {CategoryName:'Computer Maintenance Experts',CategoryImage:require('../assets/EXPERTS/maintenance.jpeg'), rating:5,id:'4'},
  
 //  {CategoryName:'Machine Learning Experts',CategoryImage:require('../assets/EXPERTS/machine.jpeg'), rating:5,id:'5'},
 //  {CategoryName:'Computer Vision Experts',CategoryImage:require('../assets/EXPERTS/vision.jpeg'), rating:5,id:'6'},
 //  {CategoryName:'Automation Experts',CategoryImage:require('../assets/EXPERTS/automation.jpeg'), rating:5,id:'7'},
 //  {CategoryName:'Data Analysis and Visualization Experts',CategoryImage:require('../assets/EXPERTS/data.jpeg'), rating:5,id:'8'},

 //    ]);

  //FOR ALL HOB APIS
const { universities:allHob, isPending, error } = useFetch('https://freeprojectsshareapp.pythonanywhere.com/apis/Hobs');


 return (
 


 


// { MWANZO WA container1}
 <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>



<ArticlesHeader />







{/*MWANZO WA VIEW YA SEARCH*/}

      <View style={{
        marginTop: 10,
         paddingHorizontal: 20,
      }}>

       <View
          style={{
            
            marginTop: 10,
            padding:2,
            paddingLeft: 1,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom:10,
            elevation:3,
            
            shadowOffset:{width:1, height:1},
            shadowColor:'#333',
            shadowOpacity:1,
            shadowRadius:2,
            

          }}>

          <TouchableOpacity>
          {/*<FontAwesome size={20} name="search" />*/}
          
          <TextInput
          value={input} onChangeText ={(text) => setInput(text)}
            style={{fontSize: 18, 
              marginLeft: 10,
              
              color:'black',
              fontWeight:'bold',
             width:Dimensions.get('window').width-100,
              backgroundColor:'white',
              padding:20,
              borderRadius:10,
              

            }}
            placeholder="Search Expert Category"
          />
          </TouchableOpacity>
        </View>
        
        <View
          style={{
            paddingVertical: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={[{
            fontSize: 20, 
            fontWeight: 'bold',
            //color:'white',


            //fontFamily: 'RobotoLight',
        },{color:theme.color}]}>Experts</Text>
          <Text style={[{
            fontSize: 18, 
            fontWeight: 'bold', 
            //color: '#6E8AFA'
          },{color:theme.color}]}>
            See All
          </Text>
        </View>
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}









 { isPending ? (

        <View style={{
          justifyContent:'center',
          alignItems:'center',
        }}>
          

          <ActivityIndicator size="large" color="red" /> 
          </View>
          ): (


<HobsPage allHob={allHob} input={input} setInput={setInput} />


)}












    </View>
// MWISHO WA container1




  );
};






  
export default AllHob;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'black',

    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  universityheadertext:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'red',
    // marginBottom:20,
    marginTop:0,
  
  },
});