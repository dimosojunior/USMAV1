import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Switch, Text, View, Button, Image } from 'react-native';
import {globalstyles, images} from '../Styles/global';
import Card from '../Shared/card';

//import {AppLoading} from 'expo';

import * as SplashScreen from 'expo-splash-screen';

import AppLoading from 'expo-app-loading';
// import { Inter_900Black } from '@expo-google-fonts/inter';
// import { 
      
//      Poppins_100Thin,
//      Poppins_300Light,
//      Poppins_400Regular,
//      Poppins_700Bold 
// } from '@expo-google-fonts/poppins';
// import { 
//   OpenSans_300Light,
//   OpenSans_400Regular,
//   OpenSans_700Bold,
//   OpenSans_700Bold_Italic 
// } from '@expo-google-fonts/open-sans';

import { useFonts } from 'expo-font'


import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';

// kila navigation tunayoicreate kwenye routes/homeStack.js huwa inakuwa na 
  // props by default ko tunaitumia hiyo ili kupata page zilizopo kule
export default function Qrcode() {

const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)

//FOR fontFamily


 
  return (
    <View style={[styles.detailpagecontainer, {backgroundColor:theme.backgroundColor}]}>
  
   
<Text style={{
  
  color:'red'
}}>QRCODE SCREEN</Text>


<Switch 

value={darkMode}
onValueChange={(value) => {setdarkMode(value);
  EventRegister.emit('ChangeTheme', value)
}}
/>



    </View>
  );
}

const styles = StyleSheet.create({
  detailpagecontainer: {
    flex: 1,
    backgroundColor: 'wheat',
    justifyContent:'center'

    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});