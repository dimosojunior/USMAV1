import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { StyleSheet, Text,ScrollView, View,Image,Animated, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';
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



import { useFonts } from 'expo-font'

import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';
const Articles =({articles}) => {



  // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)

const navigation = useNavigation();

// HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
const [ArticlesName, setArticlesName] = useState('');
    const move = (ArticlesName) =>{
      setArticlesName(ArticlesName);
      console.log(ArticlesName)
      navigation.navigate(ArticlesName);
    }
//INAISHIA HAPA HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
  

 
  
 const {width, height} = Dimensions.get('window');
 




 // FOR ANIMATION SLIDE
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const scrollX = React.useRef(new Animated.Value(0)).current;




 

  return (



    <View style={[globalstyles.container,{backgroundColor:theme.backgroundColor}]}>
    




{/*MWANZO WA ARTICLES*/}

<View style={{
  height:240,
  width:Dimensions.get('window').width,

}}>
  
<TouchableOpacity>
<Text style={[globalstyles.Articlesheadertext,{color:theme.color}]}>Articles</Text>
</TouchableOpacity>










{ articles? (
<Animated.FlatList 

data={articles}
keyExtractor={item => item.id}
showsHorizontalScrollIndicator={false}
horizontal
pagingEnabled
onScroll={Animated.event(
  [{ nativeEvent: { contentOffset:{ x: scrollX }}}],
  { useNativeDriver: true}
  )}
// numColumns ={2} 
renderItem = {({item, index}) => {



  const inputRange = [
    (index - 1) * width,
    index * width,
    (index + 1) * width

  ];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-width * .7, 0, width * .7]
  })
return (
<View style={{
  width,
height:ITEM_HEIGHT-400,
  // justifyContent:'center',
  alignItems:'center',
}}>

<View style={{
          borderRadius:18,
          borderWidth:0,
          width:Dimensions.get('window').width-20,
          // borderColor:'white',
          shadowColor:'#000',
          shadowOpacity:0.5,
          shadowRadius:30,
          shadowOffset:{
            width:0,
            height:0,
          },
          borderRadius:18,
          padding:5,
          backgroundColor:'white',
}}>
  <View  style={{
         
          height:ITEM_HEIGHT-250, 
          overflow:'hidden',
          alignItems:'center',
          borderRadius:14,
          
        }}
>
{ item.ArticleImage ? (
     <Animated.Image
     // kama unatumia APIS
       source={{uri: item.ArticleImage}}

        //source={item.ArticleImage}
        style={{
          width:Dimensions.get('window').width-20,
          height:ITEM_HEIGHT-150,
          resizeMode:'cover',
          transform: [
            {
              translateX,
            },
          ],

        }}
      />

):(

<Image source={require('../assets/3q.jpeg')} 
  style={{
          width:Dimensions.get('window').width-20,
          height:ITEM_HEIGHT-150,
          resizeMode:'cover',
          // transform: [
          //   {
          //     translateX,
          //   },
          // ],

        }}

/>
)}
  </View>

  { item.ArticlesName ? (
<TouchableOpacity 
onPress={() => move(item.ArticlesName)}>

<Text style={[globalstyles.articleName,{
  textAlign:'center',
  marginBottom:80,
  marginTop:20,
  fontSize:18,
  //elevation:3,
  //backgroundColor:'black',
  shadowOffset:{width:1, height:1},
  shadowColor:'#333',
  shadowOpacity:1,
  shadowRadius:2,
  borderRadius:6,
  paddingBottom:10,
  color:'white',
  
},{color:theme.color},{backgroundColor:theme.backgroundColor}]}>{item.ArticlesName}</Text>

</TouchableOpacity>
) : (
<Text style={globalstyles.Articleslidingtext}>NO Article NAME</Text>
)}






  </View>

</View>


  )}}

/>

):(
<Text style={globalstyles.universityslidingtext}>NO ANY ARTICLE ADDED</Text>

)}
{/*MWISHO WA FLAT LIST SLIDES HORIZONTAL*/}






</View>



{/*MWISHO WA ARTICLES*/}









    </View>




  );
};






  
export default Articles;



const styles = StyleSheet.create({
     

});