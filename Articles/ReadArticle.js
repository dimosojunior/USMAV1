import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Alert,Linking,ScrollView,TouchableOpacity, Platform, Text, View, Button, Image } from 'react-native';
import {globalstyles, images} from '../Styles/global';
import Card from '../Shared/card';
import DetailPageHeader from '../Shared/DetailPageHeader';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import ProjectCourseDetailPage from '../Shared/ProjectCourseDetailPage';

//import Pdf from 'react-native-pdf';
import * as OpenAnything from 'react-native-openanything';
// kila navigation tunayoicreate kwenye routes/homeStack.js huwa inakuwa na 
  // props by default ko tunaitumia hiyo ili kupata page zilizopo kule

import HTMLView from 'react-native-htmlview';
import Html from 'react-native-render-html';
import ArticlesHeader from '../Shared/ArticlesHeader';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useCallback, useEffect, useContext} from 'react';

export default function ReadArticle({  route, navigation  }) {

    // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)

const { 
    Title, 
    ArticleBody, 
    ArticleImage,
    
    
    WrittenBy,
    Github,
    

    // StudentEmail,
    // StudentPhoneNumber,
    // Github,
    // Youtube,
    // WhatsappLink,
    // Created,
    // Updated,


    id 
   } = route.params;
  //FUNCTION YA KURUDI KWENY HOME PAGE
const {width, height} = Dimensions.get('window');
  const goBackPage = () =>{
    navigation.goBack();

  }







const source = require('../assets/test.pdf');

const renderersProps ={
  img:{
    enableExperimentalPercentWidth:true
  }
}

//const source = 'https://programmers.pythonanywhere.com/admin/DimosoApp/uploadfiles/32/change/pdfs/test_01__test_02.pdf'

// const Github = "https://github.com/vishal-pawar";
const url2 = "abcd://abcd.com";
const StudentPhoneNumber = '+255628431507'
const message = "USMA APP!!"
const StudentEmail = "juniordimoso8@gmail.com"
const WhatsappLink = "juniordimoso8@gmail.com"
const Youtube = "www.youtube.com"



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





const htmlContent = ' <h1>This is the html document</h1> <img src="../assets/me.jpg" /> ';
const htmlContent2 = '<p style=\"text-align:center\"><span style=\"color:#fff\"><strong>SMART INVIGILATION SYSTEM</strong></span></p>\r\n\r\n<p>Examination cheating activities like face movement, head movements, hand movements, or hand contact are extensively involved, and the rectitude and worthiness of fair and unbiased examination are prohibited by such cheating activities. The aim of this project is to develop a model to supervise or control unethical activities in real-time examinations. Exam supervision is fallible due to limited human abilities and capacity to handle students in examination rooms, and these errors can be reduced with the help of the Smart Invigilation System.</p>\r\n\r\n<p>This work presents an automated system for exams invigilation using machine learning and computer vision approaches i.e., Dlib and Opencv . Dlib is an object detection algorithm that is implemented to detect the suspicious activities of students during examinations based on their face movements, and for starting capturing the video of students Opencv is used.</p>\r\n\r\n<p>The model is fully efficient in detecting and monitoring students in one frame during examinations. Different real-time scenarios are considered to evaluate the performance of the Automatic Invigilation System. The proposed invigilation model can be implemented in colleges, universities, and schools to detect and alert student suspicious activities. Hopefully, through the implementation of the proposed invigilation system, we can prevent and solve the problem of cheating because it is unethical.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"/media/media/2023/04/10/3q.jpeg\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>Click the link below to view more information about this project</em></p>'

  return (

    
  <View style={[globalstyles.container,{backgroundColor:theme.backgroundColor}]}>

    {/*<DetailPageHeader />*/}    








     
{/*mwanzo wa view ya image na icon*/}
<View style={{
   width:Dimensions.get('window').width,
}}>







<ArticlesHeader />








{/*MWANZO WA ReadArticle*/}

{ ArticleImage ? (
 <Image
      
      source={{uri: ArticleImage}}
      //source={ArticleImage}
        style={{width,
          marginTop:10,
          height:150,
          
        }}
      />

      ) : (

  <Image 
          source={require('../assets/ARTICLES/ai.jpeg')}  
           style={{width,
          marginTop:10,
          height:150,
          
        }} 
          />
      )}
  
</View>
{/*mwisho wa view ya image na icon*/}







<ScrollView>

{/*MWANZO WA TAARIFA ZA PROJECT*/}
    
<View style={[globalstyles.detailModule,{backgroundColor:theme.backgroundColor}]}>

<Card style={[globalstyles.cad,{backgroundColor:theme.backgroundColor}]}>

<View>
<Text style={[globalstyles.singleInfo,{color:theme.color}]}> <Text 
style={{
  color:'green',
}}>Article Name:</Text> {Title}</Text>
</View>

<View>
<Text style={[globalstyles.singleInfo,{color:theme.color}]}> <Text 
style={{
  color:'green',
}}>Written By :</Text> {WrittenBy}</Text>
</View>


<View>
<Text style={[globalstyles.singleInfo,{color:theme.color}]}> <Text 
style={{
  color:'green',
}}>Year:</Text> {2023}</Text>
</View>













 {/*<Image source={require('../assets/1q.jpeg')} style={globalglobalstyles.ratingImage} />
*/}

</Card>


</View>

{/*MWISHO WA TAARIFA ZA PROJECT*/}




{/*MWANZO WA ABOUT A PROJECT*/}
{ ArticleBody && (
<View style={[globalstyles.body,{backgroundColor:theme.backgroundColor}]}>

<Text
 style={{
  textAlign:'center',
  fontSize:18,
  margin:10,

 }}>About a Project</Text>
  

<View style={globalstyles.bodyText}>



<View style={{}}>
<Html 
contentWidth={400}
source={{html: ArticleBody}}
renderersProps={renderersProps}  //{ArticleBody}

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

</View>





</View>
)}
{/*MWISHO WA ABOUT A PROJECT*/}




















{/*MWANZO WA LINKING ZA  PROJECT*/}
<View style={globalstyles.linking}>

  <View style={globalstyles.buttonContainer}>
      <Button title="Download Github File" onPress={() => {
          openUrl(Github)
      }} color="steelblue" />

  </View>



<View style={globalstyles.buttonContainer}>
                <Button title="Call Project Owner" onPress={() => {
                    Linking.openURL(`tel:${StudentPhoneNumber}`)
                }} color="red" />
            </View>





<View style={globalstyles.buttonContainer}>
                <Button 
                title="Send SMS" 
                onPress={() => sendTextMessage(StudentPhoneNumber, message)} 
                color="blue" />
            </View>



 <View style={globalstyles.buttonContainer}>
                <Button title="Send Email" onPress={() => {
                    Linking.openURL(`mailto:${StudentEmail}?subject=Hello ${StudentName}&body=${message}`)
                }} color="#ff6767" />
            </View>


<View style={globalstyles.buttonContainer}>
                <Button title="Send  Whatsapp Message" onPress={() => {
                    Linking.openURL(`whatsapp://send?phone=${StudentPhoneNumber}&text=${message}`)
                }} color="green" />
</View>







 <View style={globalstyles.buttonContainer}>
                <Button title="open Youtube" onPress={() => {
                    Linking.openURL(Youtube)
                }} color="darkred" />
            </View>


</View>
{/*MWISO WA LINKING ZA  PROJECT*/}





</ScrollView>




{/*<Button 
title="Pdf File"
onPress={() => OpenAnything.Pdf(source)}
/>

*/}










    </View>
    
  );
}

const styles = StyleSheet.create({
    
  
  });
