import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function DetailPageHeader(  {title} ) {
const navigation = useNavigation();

 const goToHomePage = () =>{
    navigation.goBack();

  }


  return (
    <ImageBackground source={require('../assets/3q.jpeg')} style={styles.header}>
      <MaterialIcons name='menu' 
      size={28} onPress={goToHomePage} style={styles.icon} />
  {/*   <Image source={require('../assets/1q.jpeg')} style={styles.headerImage} />*/}
        <Text style={styles.headerText}>{title}</Text>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    header: {      
        width:Dimensions.get('screen').width,
        height:140,
        flexDirection: 'row',
        
        // alignItems: 'flex-start',
        marginLeft:0,
        paddingLeft:0,
        // backgroundColor:"red",
        
        


    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 22,
      color: 'white',
      letterSpacing: 1,
      justifyContent:'center',

      
      alignItems:"center",
      marginTop:30,
      
    },
    icon: {
      position: 'relative',
      marginLeft:5,
      flexDirection:'row',
      flex:0.5,
      color:'red',
      fontWeight:'bold',
      marginTop:20,
      fontSize:40,
      

    },

    headerImage:{
      width:50,
      height:50,
      marginHorizontal:10,
      marginTop:80,
      borderRadius:10,
    }
  });

