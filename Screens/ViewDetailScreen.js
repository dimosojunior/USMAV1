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
export default function ViewDetail({  route, navigation  }) {
const { UniversityName, rating, UniversityPlace,UniversityImage, id } = route.params;
  //FUNCTION YA KURUDI KWENY HOME PAGE
const {width, height} = Dimensions.get('window');
  const goToHomePage = () =>{
    navigation.goBack();

  }






// kwa ajili ya kozi zote

 const [projects, setProjects] = useState([
  {CourseName:'Electrical Engineering',University:'University of Dar es salaam ',CourseImage:require('../assets/udsm.jpeg'),id:'1'},
  {CourseName:'Computer Engineering',University:'University of Dar es salaam ',CourseImage:require('../assets/must.jpg'),id:'2'},
  {CourseName:'Civil Engineering',University:'University of Dar es salaam ',CourseImage:require('../assets/udom.jpg'),id:'3'},
  {CourseName:'Mechanical Engineering',University:'University of Dar es salaam ',CourseImage:require('../assets/muhimbili.jpg'),id:'4'},
  {CourseName:'Computer Science',University:'University of Dar es salaam ',CourseImage:require('../assets/mzumbe.jpeg'),id:'5'},
  {CourseName:'ICT',University:'University of Dar es salaam ',CourseImage:require('../assets/1q.jpeg'),id:'6'},
  {CourseName:'IT',University:'University of Dar es salaam ',CourseImage:require('../assets/2q.jpeg'),id:'7'},
  {CourseName:'Telecommunication',University:'University of Dar es salaam ',CourseImage:require('../assets/3q.jpeg'),id:'8'},
  {CourseName:'Biomedical',University:'University of Dar es salaam ',CourseImage:require('../assets/must.jpg'),id:'9'},
  {CourseName:'Electronics Engineering',University:'University of Dar es salaam ',CourseImage:require('../assets/udom.jpg'),id:'10'}, 
    ]);


 //FOR UNIVERSITY COURSES APIS
//const { universities:projects, isPending, error } = useFetch('https://83d3-197-250-197-195.eu.ngrok.io:8000/apis/UniversityCourses/');
//const { universities:projects, isPending, error } = useFetch('https://a2f5-197-250-100-164.eu.ngrok.io/apis/UniversityCourses/');

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
    }}>{UniversityName}</Text>


    <Image source={require('../assets/me.jpg')} 
  style={styles.headerImage} />


     </View>
{/*mwisho wa view ya icon na title*/}

 <Image
      //source={{uri: UniversityImage}}
        source={UniversityImage}
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











<ProjectCourseDetailPage projects={projects} />













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
