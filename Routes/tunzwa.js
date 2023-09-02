import 'react-native-gesture-handler';
import 'react-native-reanimated';

import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {globalstyles, images} from '../Styles/global';
import Card from '../Shared/card';
import DetailPageHeader from '../Shared/DetailPageHeader';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import ProjectCourseDetailPage from '../Shared/ProjectCourseDetailPage';

import useFetch from '../useFetch';
// kila navigation tunayoicreate kwenye routes/homeStack.js huwa inakuwa na 
  // props by default ko tunaitumia hiyo ili kupata page zilizopo kule
export default function ViewRoute({  route, navigation  }) {
const { RouteName, RouteDescription,RouteImage, id } = route.params;
  //FUNCTION YA KURUDI KWENY HOME PAGE
const {width, height} = Dimensions.get('window');
  const goToHomePage = () =>{
    navigation.goBack();

  }






  return (
    <View style={globalstyles.container}>

    {/*<DetailPageHeader />*/}     

     
{/*mwanzo wa view ya image na icon*/}
<View style={{
}}>
{/*mwanzo wa view ya icon na title*/}
<View style={{
  backgroundColor:'white',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-around',
}}>

<Ionicons name='arrow-back-circle-outline' 
      size={32} onPress={goToHomePage}
      style={{
        marginLeft: 10,
      }}
        />

    <Text style={{
      fontSize:22,
      textAlign:'center',
      // marginLeft:30,
      color:'blue',
      fontWeight:'bold',
      marginHorizontal:30,
    }}>{RouteName}</Text>


    <Image source={require('../assets/me.jpg')} 
  style={styles.headerImage} />


     </View>
{/*mwisho wa view ya icon na title*/}

 <Image
      //source={{uri: RouteImage}}
        source={RouteImage}
        style={{width,
          marginTop:10,
          height:150,
        }}
      />
  
</View>
{/*mwisho wa view ya image na icon*/}























    </View>
  );
}

const styles = StyleSheet.create({
    headerImage:{
      width:30,
      height:30,
      // marginHorizontal:10,
      marginTop:0,
      borderRadius:20,
      marginRight:10,
      marginBottom:0
    },
  
  });
