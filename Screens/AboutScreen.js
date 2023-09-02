import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Alert,Linking, Text,ScrollView, View, Button, Image,  TouchableOpacity} from 'react-native';
import {globalstyles, images} from '../Styles/global';
import Card from '../Shared/card';
import Header from '../Shared/header';
import ArticlesHeader from '../Shared/ArticlesHeader';
import { MaterialIcons} from '@expo/vector-icons';
import { Ionicons, FontAwesome} from '@expo/vector-icons';

// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';

//import AppLoading from "expo-app-loading";

// kila navigation tunayoicreate kwenye routes/homeStack.js huwa inakuwa na 
  // props by default ko tunaitumia hiyo ili kupata page zilizopo kule
export default function About() {

    // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)




const MyNumber = '+255628431507'
MyName = "Dimoso Junior"
const message = "Chat with Dimoso El junior!!"
const MyEmail = "juniordimoso8@gmail.com"
const MyGithub = "https://github.com/dimosojunior"
const MyWhatsapp = "juniordimoso8@gmail.com"
const MyYoutube = "www.youtube.com"

const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this url: ${url}`);
        }
    }


 // if (!fontsLoaded) {
 //    <AppLoading />;
 //  }
 
  return (
  	

    <View style={[globalstyles.containerAbout,{backgroundColor:theme.backgroundColor}]}>
<ArticlesHeader />


    <ScrollView>

    <View style={[globalstyles.aboutContainer,{backgroundColor:theme.backgroundColor}]}>
    

      <Text style={[globalstyles.mainHeader,{color:theme.color}]}> University Students Materials App</Text>
      <Text style={[globalstyles.paraStyle,{color:theme.color}]}> Free Projects Share</Text>

      <View>
        <Image
          style={globalstyles.imgStyle}
          source={require('../assets/u1.png')}
        />
      </View>

      <View style={[globalstyles.aboutLayout,{backgroundColor:theme.backgroundColor}]}>
        <Text style={[globalstyles.aboutSubHeader,{color:theme.color}]}> About USMA </Text>
        <Text style={[globalstyles.paraStyle, globalstyles.aboutPara,{color:theme.color}]}>
            This is Android Application that can be used by the universities Students
            to learn what other students did, especially in case of Engineering projects.
         It includes projects done by the students from different Universities found in 
         Tanzania, but 
         also you can learn articles prepared by the students and you communicate
         with experts from different fields.
                  </Text>
      </View>

      <Text style={[globalstyles.mainHeader,{color:theme.color}]}> Follow me on Social Network </Text>

      <View style={[globalstyles.menuContainer,{backgroundColor:theme.backgroundColor}]}>
        
        <TouchableOpacity
          style={globalstyles.buttonStyle}
          onPress={() =>
            Linking.openURL(`mailto:${MyEmail}?subject=Hello ${MyName}&body=${message}`)
          }>
        <MaterialIcons name='email' 
      size={35} color='red' style={globalstyles.iconStyle} />
        </TouchableOpacity>


        <TouchableOpacity
          style={globalstyles.buttonStyle}
          onPress={() =>
            openUrl(MyGithub)
          }>
          {/*<Image
            style={globalstyles.iconStyle}
            source={require('../assets/2q.jpeg')}
          />*/}

          <FontAwesome name='github' 
      size={35} color='blue' style={globalstyles.iconStyle} />
        </TouchableOpacity>


        <TouchableOpacity
          style={globalstyles.buttonStyle}
          onPress={() => {Linking.openURL(`whatsapp://send?phone=${MyNumber}&text=${message}`)}}>
        <FontAwesome name='whatsapp' 
      size={35} color='green' style={globalstyles.iconStyle} />
        </TouchableOpacity>


        <TouchableOpacity
          style={globalstyles.buttonStyle}
          onPress={() => {Linking.openURL(MyYoutube)}}>
        <FontAwesome name='youtube' 
      size={35} color='red' style={globalstyles.iconStyle} />
        </TouchableOpacity>





      </View>
    </View>

</ScrollView>









    </View>

    
  );
}



const styles = StyleSheet.create({
 
});

