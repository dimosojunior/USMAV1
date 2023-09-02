
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';
import {globalstyles, images} from '../Styles/global';

export default function Header(  {title} ) {

  // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)


const navigation = useNavigation();

  const openMenu = () => {
    navigation.openDrawer();
  }


  return (
  
<View style={[globalstyles.headerHeaderFile,{backgroundColor:theme.backgroundColor}]}>
      <MaterialIcons name='sort' 
      size={28} onPress={openMenu} style={[globalstyles.iconHeaderFile,{color:theme.color}]} />

        <Text style={[globalstyles.headerTextHeaderFile,{color:theme.color}]}>{title}</Text>
<Image source={require('../assets/me.jpg')} 
  style={globalstyles.headerImageHeaderFile} />

        </View>  
    
  );
}

const styles = StyleSheet.create({
  
     });

