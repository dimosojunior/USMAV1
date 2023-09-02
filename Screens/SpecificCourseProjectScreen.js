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
import IndividualProjectDetailPage from '../Shared/IndividualProjectDetailPage';
import useFetch from '../useFetch';

// kila navigation tunayoicreate kwenye routes/homeStack.js huwa inakuwa na 
  // props by default ko tunaitumia hiyo ili kupata page zilizopo kule
export default function SpecificCourseProject({  route, navigation  }) {
const { CourseName, CourseImage, id } = route.params;
  //FUNCTION YA KURUDI KWENY HOME PAGE
const {width, height} = Dimensions.get('window');
  const goBackPage = () =>{
    navigation.goBack();

  }






// kwa ajili ya individuals projects zote za kozi mbalimbali

 const [individualProjects, setIndividualProjects] = useState([
  {
    ProjectName:'Home Automation',
    university:'University of Dar es salaam ',
    ProjectImage:require('../assets/udsm.jpeg'),
    ProjectBody: 'This project is concerning with home automation',
    CourseName:'Electrical Engineering',
    StudentName: 'Shukuru Dimoso',
    PdfFile:'This is a pdf File',
    VideoLink:'www.youtube.com',
    id:'1'
  },

   {
    ProjectName:'Speed Control',
    university:'University of Dar es salaam ',
    ProjectImage:require('../assets/must.jpg'),
    ProjectBody: 'This project is concerning with home automation',
    CourseName:'Electrical Engineering',
    StudentName: 'Abdallah Ismail',
    PdfFile:'This is a pdf File',
    VideoLink:'www.youtube.com',
    id:'2'
  },

   {
    ProjectName:'Smart Bag System',
    university:'University of Dar es salaam ',
    ProjectImage:require('../assets/3q.jpeg'),
    ProjectBody: 'This project is concerning with home automation',
    CourseName:'Electrical Engineering',
    StudentName: 'Aisha Mohammed',
    PdfFile:'This is a pdf File',
    VideoLink:'www.youtube.com',
    id:'3'
  },

   {
    ProjectName:'Smart Invigilation System',
    university:'University of Dar es salaam ',
    ProjectImage:require('../assets/udsm.jpeg'),
    ProjectBody: 'This project is concerning with home automation',
    CourseName:'Electrical Engineering',
    StudentName: 'Dimoso Junior',
    PdfFile:'This is a pdf File',
    VideoLink:'www.youtube.com',
    id:'4'
  },
   ]);

 //FOR PROJECTS APIS

//const { universities:individualProjects, isPending, error } = useFetch('https://a2f5-197-250-100-164.eu.ngrok.io/apis/AllProjects/');



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
      size={32} onPress={goBackPage}
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
    }}>{CourseName}</Text>


    <Image source={require('../assets/me.jpg')} 
  style={styles.headerImage} />


     </View>
{/*mwisho wa view ya icon na title*/}

 <Image
    //source={{uri: CourseImage}}
        source={CourseImage}
        style={{width,
          marginTop:10,
          height:150,
        }}
      />
  
</View>
{/*mwisho wa view ya image na icon*/}



    
{/*<View style={globalstyles.detalModule}>
<Card>
<Text style={globalstyles.singleInfo}>University Name: {UniversityName}</Text>
<Text style={globalstyles.singleInfo}>Place: {UniversityPlace}</Text>
<Text style={globalstyles.singleInfo}> Rating: {rating}</Text>

<View>
<Text style={globalstyles.singleInfo}>Module Rating: </Text>
<Image source={images.ratings[rating]} style={globalstyles.ratingImage} />
</View>*/}

 {/*<Image source={require('../assets/1q.jpeg')} style={globalstyles.ratingImage} />
*/}

{/*</Card>


</View>*/}











<IndividualProjectDetailPage individualProjects={individualProjects} />













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
