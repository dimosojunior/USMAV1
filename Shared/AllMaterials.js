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


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';

const AllMaterials =({universities}) => {

// To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)


const navigation = useNavigation();

// HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
const [UniversityName, setUniversityName] = useState('University of Dodoma');
    const move = (UniversityName) =>{
      setUniversityName(UniversityName);
      console.log(UniversityName)
      navigation.navigate(UniversityName);
    }
//INAISHIA HAPA HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
  

 
  
 const {width, height} = Dimensions.get('window');
 



//FONTS

 
// MWANZO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE


  const renderItem = ({item, index}) => {




 
    return (
      
      <MotiView
        style={[styles.listContainer,{backgroundColor:theme.backgroundColor}]}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>

      
        <View style={styles.imageContainer}>
        { item.UniversityImage ? (
          <Image 
          // kama unatumia APIS
          source={{uri: item.UniversityImage}}
          //source={item.UniversityImage} 
          style={styles.image} 
          />
          ):(
          <Image 
          source={require('../assets/3q.jpeg')}  
          style={styles.image} 
          />

          )}
        </View>

        <Text style={[styles.nameText,{color:theme.color}]}>{item.UniversityName}</Text>
        <Text style={[styles.priceText,{color:theme.color}]}>{item.price}</Text>
         
         <TouchableOpacity 
         onPress={() => move(item.UniversityName)}>

          <View style={styles.button}>
            <Text style={styles.buttonText}>View</Text>
          </View>

        </TouchableOpacity>


      </MotiView>

          );
  };

// MWISHO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE



  return (



    <View style={[styles.container, {backgroundColor:theme.backgroundColor}]}>
    





{/*<TouchableOpacity>
<Text style={globalstyles.universityheadertext}>ALL UNIVERSITIES</Text>
</TouchableOpacity>

*/}














{/*{MWANZO WA FLAT LIST COLUMN MBILI}*/}
      <FlatList
        data={universities}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        //horizontal
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>




  );
};






  
export default AllMaterials;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'black',

  },
  listContainer: {
    width: Dimensions.get('window').width / 2 - 8,
    //backgroundColor: 'black',
    margin: 1,
    borderRadius: 20,
  },
  imageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {width: '100%', height: undefined, aspectRatio: 1},
  nameText: {
    color: 'white',
    // fontWeight: 'bold',
    marginLeft: 15,
    fontSize:18,
    // fontFamily: 'SerifRegular',
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    // fontFamily: 'SerifRegular',
  },
  button: {
    backgroundColor: 'wheat',
    padding: 10,
    margin: 15,
    borderRadius: 10,

  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    // fontFamily: 'SerifRegular',
  },
});