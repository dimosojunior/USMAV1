import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { StyleSheet, Text,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';
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

import{LinearGradient} from 'expo-linear-gradient';
//E3E4FA
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';

const HobsPage =({allHob,input, setInput}) => {

// To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)


const navigation = useNavigation();

// HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
const [CategoryName, setCategoryName] = useState('University of Dodoma');
    const move = (CategoryName) =>{
      setCategoryName(CategoryName);
      console.log(CategoryName)
      navigation.navigate(CategoryName);
    }
//INAISHIA HAPA HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
  

 
  
 const {width, height} = Dimensions.get('window');
 




 
// MWANZO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE


  const renderItem = ({item, index}) => {



 // mwanzo kwa ajili ya search
    if (input === ""){
 
    return (


      
      <MotiView
        style={[globalstyles.listContainer,{backgroundColor:theme.backgroundColor}]}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>

      
        <View style={globalstyles.imageContainer}>
        { item.CategoryImage ? (
          <Image 
          // kama unatumia APIS
          source={{uri: item.CategoryImage}}
          //source={item.CategoryImage} 
          style={globalstyles.image} 
          />
          ):(
          <Image 
          source={require('../assets/3q.jpeg')}  
          style={globalstyles.image} 
          />

          )}
        </View>

        <Text style={[globalstyles.nameText,{color:theme.color}]}>{item.CategoryName}</Text>
        <Text style={[globalstyles.priceText,{color:theme.color}]}>{item.price}</Text>
         
         <TouchableOpacity 
         onPress={() => move(item.CategoryName)}>

          <View style={globalstyles.button}>
            <Text style={globalstyles.buttonText}>View</Text>
          </View>

        </TouchableOpacity>


      </MotiView>

          );








    // hili bano la chini ni la if ya juu kama mtu akitype   
}


 if(item.CategoryName.toLowerCase().includes(input.toLowerCase())){






return (


      
      <MotiView
        style={[globalstyles.listContainer,{backgroundColor:theme.backgroundColor}]}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>

      
        <View style={globalstyles.imageContainer}>
        { item.CategoryImage ? (
          <Image 
          // kama unatumia APIS
          source={{uri: item.CategoryImage}}
          //source={item.CategoryImage} 
          style={globalstyles.image} 
          />
          ):(
          <Image 
          source={require('../assets/3q.jpeg')}  
          style={globalstyles.image} 
          />

          )}
        </View>

        <Text style={[globalstyles.nameText,{color:theme.color}]}>{item.CategoryName}</Text>
        <Text style={[globalstyles.priceText,{color:theme.color}]}>{item.price}</Text>
         
         <TouchableOpacity 
         onPress={() => move(item.CategoryName)}>

          <View style={globalstyles.button}>
            <Text style={globalstyles.buttonText}>View</Text>
          </View>

        </TouchableOpacity>


      </MotiView>

          );




// hili bano la chini ni la if ya pili mwisho
  }










 // hili bano la chini ni la renderItem mwisho  

  };

// MWISHO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE



  return (



    <View style={[globalstyles.container, {backgroundColor:theme.backgroundColor}]}>
    





{/*<TouchableOpacity>
<Text style={globalstyles.universityheadertext}>ALL UNIVERSITIES</Text>
</TouchableOpacity>

*/}














{/*{MWANZO WA FLAT LIST COLUMN MBILI}*/}
      <FlatList
        data={allHob}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        //horizontal
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>




  );
};






  
export default HobsPage;



const styles = StyleSheet.create({
 
});