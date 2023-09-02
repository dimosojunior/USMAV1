
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons, FontAwesome} from '@expo/vector-icons';

// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';
import {globalstyles, images} from '../Styles/global';

export default function ArticlesHeader() {

    // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)

const navigation = useNavigation();

 const goBackPage = () =>{
    navigation.goBack();

  }


  return (
    








<View style={{
}}>
{/*mwanzo wa view ya icon na title*/}
<View style={[{
  //backgroundColor:'black',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-around',
  paddingVertical:10
},{backgroundColor:theme.backgroundColor}]}>

<Ionicons name='arrow-back-circle-outline' 
      size={32} onPress={goBackPage}
      color="white"
      style={[{
        marginLeft: 10,
      },{color:theme.color}]}
        />

    <Text style={[globalstyles.headerTextArticleHeaderFile,{
      
    },{color:theme.color}]}>USMA APP</Text>


    <Image source={require('../assets/me.jpg')} 
  style={globalstyles.headerImageArticleHeaderFile} />


     </View>
{/*mwisho wa view ya icon na title*/}

{/* <Image
    //source={{uri: CourseImage}}
        source={CourseImage}
        style={{width,
          marginTop:10,
          height:150,
        }}
      />*/}
  
</View>
// {mwisho wa view ya image na icon}








// {MWISHO WA HEADER}









  );
}

const styles = StyleSheet.create({
    

  });

