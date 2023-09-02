import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { StyleSheet,Linking,ScrollView, TextInput,ActivityIndicator,Switch, Text,Animated, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';
import {globalstyles} from '../Styles/global';
import Card from '../Shared/card';

import useFetch from '../useFetch';
import axios from 'axios';
import Header from '../Shared/header';
// import HomeScreenCard from '../Shared/HomeScreenCard';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MotiView} from 'moti';

import AllMaterials from '../Shared/AllMaterials';
import Articles from '../Shared/Articles';



import Search from '../Shared/search';

import{LinearGradient} from 'expo-linear-gradient';

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
import React, {useState,useCallback, useEffect, useContext} from 'react';


import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ArticlesHeader from '../Shared/ArticlesHeader';
import HTMLView from 'react-native-htmlview';
import Html from 'react-native-render-html';
// kila navigation tunayoicreate kwenye routes/homeStack.js huwa inakuwa na 
  // props by default ko tunaitumia hiyo ili kupata page zilizopo kule
export default function ReadExpert({  route, navigation  }) {

const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)


const { 
    StudentName, 
    Github, 
    StudentPlace,
    Youtube,
    Email,
    Instagram,
    Phone,
    StudentImage,

    Body,
    
    WrittenBy,
    
    Whatsapp,
    // CategoryName,
    // Created,
    // Updated,


    id 
   } = route.params;
  //FUNCTION YA KURUDI KWENY HOME PAGE
const {width, height} = Dimensions.get('window');
  const goBackPage = () =>{
    navigation.goBack();

  }


  const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this url: ${url}`);
        }
    }

const sendTextMessage = useCallback(async (phNumber, message) => {
        const separator = Platform.OS === 'ios' ? '&' : '?'
        const url = `sms:${phNumber}${separator}body=${message}`
        await Linking.openURL(url)
    }, [])

const message = "USMA APP!!"


//KWA AJILI YA KURENDER HTML
const renderersProps ={
  img:{
    enableExperimentalPercentWidth:true
  }
}

 
  return (

   
    <View style={[globalstyles.detailpagecontainer, {backgroundColor:theme.backgroundColor}]}>
  
   
   <ArticlesHeader />

   
    <ScrollView>

      <View style={[globalstyles.userInfoSection, {backgroundColor:theme.backgroundColor}]}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          { StudentImage ? (
          <Image 
            
            source={{uri: StudentImage}}
            //source={StudentImage}
            style={{
              width:70,
              height:70,
              borderRadius:38
            }}/>

            ):(
             
              <Image 
          source={require('../assets/EXPERTS/icon.png')}  
            style={{
              width:70,
              height:70,
              borderRadius:38
            }}/>
            )}
          
          <View style={{marginLeft: 20}}>
            <Text style={[globalstyles.title, {
              marginTop:15,
              marginBottom: 5,
            },{color:theme.color}]}>{StudentName}</Text>
           {/* <Text style={[globalstyles.caption, {color:theme.color}]}>{CategoryName}</Text>
         */}
          </View>
        </View>
      </View>

      <View style={[globalstyles.userInfoSection, {backgroundColor:theme.backgroundColor}]}>
        <View style={globalstyles.row}>
          <Icon name="school" style={[globalstyles.icons, {color:theme.color}]} size={20}/>
          <Text style={[{marginLeft: 20}, {color:theme.color}]}>{StudentPlace}</Text>
        </View>
        <View style={globalstyles.row}>
          <FontAwesome name="phone" style={[globalstyles.icons, {color:theme.color}]} size={20}/>
          <Text style={[{marginLeft: 20}, {color:theme.color}]}>{Phone}</Text>
        </View>
        <View style={globalstyles.row}>
          <MaterialIcons name="email" style={[globalstyles.icons, {color:theme.color}]} size={20}/>
          <Text style={[{marginLeft: 20}, {color:theme.color}]}>{Email}</Text>
        </View>
      </View>




{ Body && (
      <View style={[globalstyles.infoBoxWrapper,{backgroundColor:theme.backgroundColor}]}>
         <Text style={{
          fontSize:18,
          textAlign:'center',
          marginBottom:15,
          color:theme.color,
          fontWeight:'bold',

         }}>
           About Expert
         </Text>
         
         <Html 
contentWidth={400}
source={{html: Body}}
renderersProps={renderersProps}

tagsStyles={{
  p:{
    color:theme.color,
    fontSize:16

  },
  
  a:{
    color:theme.color,
    textDecoration:'none',
  },
  h1:{
    color:theme.color,
    textAlign:'center',
    fontSize:17,
  },
   h2:{
    color:theme.color,
    textAlign:'center',
    fontSize:17,
  },
   h3:{
    color:theme.color,
    textAlign:'center',
    fontSize:17,
  },
   h4:{
    color:theme.color,
    textAlign:'center',
    fontSize:17,
  },
  // img:{
  //   width:150,
  //   height:150,
  // }
}}

/>
      </View>

)}














      <View style={[globalstyles.menuWrapper, {backgroundColor:theme.backgroundColor}]}>
       
        <TouchableOpacity onPress={() => {openUrl(Github)}}>
          <View style={[globalstyles.menuItem, {backgroundColor:theme.backgroundColor}]}>
            <FontAwesome name="github" color="#FF6347" size={25}/>
            <Text style={[globalstyles.menuItemText, {color:theme.color}]}>Github Link</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {Linking.openURL(Youtube)}}>
          <View style={[globalstyles.menuItem, {backgroundColor:theme.backgroundColor}]}>
            <FontAwesome name="youtube" color="#FF6347" size={25}/>
            <Text style={[globalstyles.menuItemText, {color:theme.color}]}>Youtube Channel</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => { Linking.openURL(`whatsapp://send?phone=${Phone}&text=${message}`)}}>
          <View style={[globalstyles.menuItem, {backgroundColor:theme.backgroundColor}]}>
            <FontAwesome name="whatsapp" color="#FF6347" size={25}/>
            <Text style={[globalstyles.menuItemText, {color:theme.color}]}>Whatsapp Link</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => sendTextMessage(Phone, message)}>
          <View style={[globalstyles.menuItem, {backgroundColor:theme.backgroundColor}]}>
            <Icon name="message" color="#FF6347" size={25}/>
            <Text style={[globalstyles.menuItemText, {color:theme.color}]}>Send Message</Text>
          </View>
        </TouchableOpacity>


         <TouchableOpacity onPress={() => {  Linking.openURL(`mailto:${Email}?subject=Hello ${StudentName}&body=${message}`)}}>
          <View style={[globalstyles.menuItem, {backgroundColor:theme.backgroundColor}]}>
            <Icon name="email" color="#FF6347" size={25}/>
            <Text style={[globalstyles.menuItemText, {color:theme.color}]}>Send Email</Text>
          </View>
        </TouchableOpacity>


         <TouchableOpacity onPress={() => {   Linking.openURL(`tel:${Phone}`)}}>
          <View style={[globalstyles.menuItem, {backgroundColor:theme.backgroundColor}]}>
            <Icon name="phone" color="#FF6347" size={25}/>
            <Text style={[globalstyles.menuItemText, {color:theme.color}]}>Call</Text>
          </View>
        </TouchableOpacity>








      </View>




</ScrollView>


    </View>
    
  );
}

const styles = StyleSheet.create({
 
});