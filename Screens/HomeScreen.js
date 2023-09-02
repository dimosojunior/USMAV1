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

//import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

//import {AppLoading} from 'expo';
import * as SplashScreen from 'expo-splash-screen';
//E3E4FA

//import AppLoading from 'expo-app-loading';



// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';




import { useFonts } from 'expo-font'


const Home =({navigation}) => {


// To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)





  // const navigation = useNavigation();

  // const [universities, setUniversities] = useState([
  // {UniversityName:'University of Dodoma',UniversityPlace:'Dodoma ',UniversityImage:require('../assets/udom.jpg'),rating:3,id:'1'},
  // {UniversityName:'University of Dar es salaam',UniversityPlace:'Dar es salaam',UniversityImage:require('../assets/udsm.jpeg'),  rating:2,id:'2'},
  // {UniversityName:'Mbeya University',UniversityPlace:'Morogoro',UniversityImage:require('../assets/must.jpg'), rating:2,id:'6'},
  // {UniversityName:'DIT',UniversityPlace:'Dar es salaam',UniversityImage:require('../assets/dit.jpeg'), rating:5,id:'5'},
 
  //   ]);
  
 //FOR UNIVERSITY APIS
const { universities, isPending, error } = useFetch('https://freeprojectsshareapp.pythonanywhere.com/apis/Universities');

//https://myapis.pythonanywhere.com/authentication/user_list_view/




// FONTS









// FOR ARTICLES
 // const [articles, setArticles] = useState([
 //  {
 //    ArticleName:'AI Articles',
 //    Github:'Dodoma ',
 //    ArticleImage:require('../assets/ARTICLES/ai.jpeg'),
 //    ArticleBody:'AI Articles',
 //    ShortDescription:'My Article',
 //    WrittenBy:'Dimoso',
 //    id:'1'
 //  },


 //  {
 //    ArticleName:'Website Articles',
 //    Github:'Dar es salaam',
 //    ArticleImage:require('../assets/ARTICLES/web.jpeg'),  
 //    ArticleBody:'AI Articles',
 //    ShortDescription:'My Article',
 //    WrittenBy:'Junior',
 //    id:'2'
 //  },



 //  {
 //    ArticleName:'Mobile Applications Articles',
 //    Github:'Morogoro',
 //    ArticleImage:require('../assets/ARTICLES/web2.jpeg'), 
 //    ArticleBody:'AI Articles',
 //    ShortDescription:'My Article',
 //    WrittenBy:'Zack',
 //    id:'3'
 //  },
  
 //    ]);



 //FOR ARTICLES APIS
const { universities:articles } = useFetch('https://freeprojectsshareapp.pythonanywhere.com/apis/Articles/');






 const {width, height} = Dimensions.get('window');




  
    return (
 


 


// { MWANZO WA container1}
 <View style={[globalstyles.container,{backgroundColor:theme.backgroundColor}]}>

 
    <Header title="USMA APP"/>


















{/*ARTICLES*/}





{/*{ error && (
  <View style={{
  justifyContent:'center',
  alignItems:'center',
}}>
  <Text style={{
    fontSize:16,
    textAlign:'center',
    color:'red',
    fontWeight:'bold',
  }}>{error}</Text>

  </View>
  )}
*/}


{ isPending ? (

<View style={{
  justifyContent:'center',
  alignItems:'center',
}}>
  

  <ActivityIndicator size="large" color="red" /> 
  </View>
  ): (






    <Articles articles={articles} />



)} 







{/*MWISHO WA ARTICLES*/}














{/*MWANZO WA VIEW YA SEARCH*/}

      <View style={{
        marginTop: 10,
         paddingHorizontal: 20,
      }}>
        
        <View
          style={{
            paddingVertical: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={[globalstyles.UniversitiesText,{
            
            //fontWeight: 'bold',
            //color:'white',


            
        },{color:theme.color}]}>Universities</Text>
          <Text style={[globalstyles.seeAllText,{
             
            //fontWeight: 'bold', 
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
  ):(


    <AllMaterials universities={universities} />


)} 







{/*<AllMaterials universities={universities} />
*/}














    </View>
// MWISHO WA container1




  );
};






  
export default Home;


const styles = StyleSheet.create({
  container1: {
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