import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,ActivityIndicator, Text, View, Button, Image } from 'react-native';
import {globalstyles, images} from '../Styles/global';
import Card from '../Shared/card';
import DetailPageHeader from '../Shared/DetailPageHeader';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import ProjectCourseDetailPage from '../Shared/ProjectCourseDetailPage';
import UdomCourses from '../Courses/UdomCourses';

import useFetch from '../useFetch';
import ArticlesHeader from '../Shared/ArticlesHeader';

// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';

// kila navigation tunayoicreate kwenye routes/homeStack.js huwa inakuwa na 
  // props by default ko tunaitumia hiyo ili kupata page zilizopo kule
export default function Udom({navigation  }) {

   // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)

 //FUNCTION YA KURUDI KWENY HOME PAGE
const {width, height} = Dimensions.get('window');
  const goBackPage = () =>{
    navigation.goBack();

  }






// kwa ajili ya kozi zote

 // const [udomCourses, setUdomCourses] = useState([
 //  {CourseName:'Electrical Engineering',University:'University of Dodoma',CourseImage:require('../assets/udsm.jpeg'),id:'1'},
 //  {CourseName:'Computer Engineering',University:'University of Dodoma',CourseImage:require('../assets/must.jpg'),id:'2'},
 //  {CourseName:'ICT',University:'University of Dodoma',CourseImage:require('../assets/udom.jpg'),id:'3'},
 //  {CourseName:'Other Projects',University:'University of Dodoma',CourseImage:require('../assets/muhimbili.jpg'),id:'4'},
 //  {CourseName:'Computer Science',University:'University of Dar es salaam',CourseImage:require('../assets/mzumbe.jpeg'),id:'5'},
 //  {CourseName:'ICT',University:'University of Dar es salaam',CourseImage:require('../assets/1q.jpeg'),id:'6'},
 //  {CourseName:'IT',University:'University of Dar es salaam',CourseImage:require('../assets/2q.jpeg'),id:'7'},
 //  {CourseName:'Telecommunication',University:'University of Dar es salaam',CourseImage:require('../assets/3q.jpeg'),id:'8'},
 //  {CourseName:'Biomedical',University:'University of Dar es salaam',CourseImage:require('../assets/must.jpg'),id:'9'},
 //  {CourseName:'Electronics Engineering',University:'University of Dar es salaam',CourseImage:require('../assets/udom.jpg'),id:'10'}, 
 //    ]);


 //FOR UNIVERSITY COURSES APIS
const { universities:udomCourses, isPending, error } = useFetch('https://freeprojectsshareapp.pythonanywhere.com/apis/UdomUniversityCourses');

  return (
    <View style={[globalstyles.container,{backgroundColor:theme.backgroundColor}]}>

    



     
{/*mwanzo wa view ya image na icon*/}
<View style={{
}}>



<ArticlesHeader />


  
</View>
{/*mwisho wa view ya image na icon*/}



 











{/*<UdomCourses udomCourses={udomCourses.filter((item) => item.University === 'University of Dodoma') } />
*/}



{/*
FOR APIS*/}

{ isPending ? (

<View style={{
  justifyContent:'center',
  alignItems:'center',
}}>
  

  <ActivityIndicator size="large" color="red" /> 
  </View>
  ): (
<UdomCourses udomCourses={udomCourses} />

)}










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
