import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet, ActivityIndicator,TouchableOpacity,TextInput, Text, View, Button, Image } from 'react-native';
import {globalstyles, images} from '../Styles/global';
import Card from '../Shared/card';
import DetailPageHeader from '../Shared/DetailPageHeader';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons, FontAwesome} from '@expo/vector-icons';


import MustElectricalEngineering from '../MustProjectsRendered/ElectricalEngineering';
import useFetch from '../useFetch';
import ArticlesHeader from '../Shared/ArticlesHeader';

// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';


// kila navigation tunayoicreate kwenye routes/homeStack.js huwa inakuwa na 
  // props by default ko tunaitumia hiyo ili kupata page zilizopo kule
export default function MustElectricalEngineeringProjects({ navigation  }) {

  // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)

  //FUNCTION YA KURUDI KWENY HOME PAGE
const {width, height} = Dimensions.get('window');
  const goBackPage = () =>{
    navigation.goBack();

  }






//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);


// kwa ajili ya individuals projects zote za kozi mbalimbali

 // const [electricalEngineering, setElectricalEngineering] = useState([
 //  {
 //    ProjectName:'Home Security System',
 //    university:'Mbeya University',
 //    ProjectImage:require('../assets/udsm.jpeg'),
 //    ProjectBody: 'This project is concerning with home automation',
 //    CourseName:'Electrical Engineering',
 //    StudentName: 'Shukuru Dimoso',
 //    PdfFile:'This is a pdf File',
 //    VideoLink:'www.youtube.com',
 //    id:'1'
 //  },

 //   {
 //    ProjectName:'Car Packing System',
 //    university:'Mbeya University',
 //    ProjectImage:require('../assets/must.jpg'),
 //    ProjectBody: 'This project is concerning with home automation',
 //    CourseName:'Electrical Engineering',
 //    StudentName: 'Abdallah Ismail',
 //    PdfFile:'This is a pdf File',
 //    VideoLink:'www.youtube.com',
 //    id:'2'
 //  },

 //   {
 //    ProjectName:'Smart Bag System',
 //    university:'University of Dar es salaam',
 //    ProjectImage:require('../assets/3q.jpeg'),
 //    ProjectBody: 'This project is concerning with home automation',
 //    CourseName:'Electrical Engineering',
 //    StudentName: 'Aisha Mohammed',
 //    PdfFile:'This is a pdf File',
 //    VideoLink:'www.youtube.com',
 //    id:'3'
 //  },

 //   {
 //    ProjectName:'Smart Invigilation System',
 //    university:'University of Dar es salaam ',
 //    ProjectImage:require('../assets/udsm.jpeg'),
 //    ProjectBody: 'This project is concerning with home automation',
 //    CourseName:'Computer Engineering',
 //    StudentName: 'Dimoso Junior',
 //    PdfFile:'This is a pdf File',
 //    VideoLink:'www.youtube.com',
 //    id:'4'
 //  },
 //   ]);

 //FOR PROJECTS APIS

const { universities:electricalEngineering, isPending, error } = useFetch('https://freeprojectsshareapp.pythonanywhere.com/apis/MustElectricalEngineeringAllProjects/');



  return (
    <View style={[globalstyles.container,{backgroundColor:theme.backgroundColor}]}>

       
     
{/*mwanzo wa view ya image na icon*/}
<View style={{
}}>


<ArticlesHeader />
  
</View>
{/*mwisho wa view ya image na icon*/}



    






{/*MWANZO WA VIEW YA SEARCH*/}

      <View style={{
        marginTop: 10,
         paddingHorizontal: 20,
      }}>
        
        <View
          style={{
            
            marginTop: 10,
            padding:2,
            paddingLeft: 1,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom:10,
            elevation:3,
            
            shadowOffset:{width:1, height:1},
            shadowColor:'#333',
            shadowOpacity:1,
            shadowRadius:2,
            

          }}>

          <TouchableOpacity>
          {/*<FontAwesome size={20} name="search" />*/}
          
          <TextInput
          value={input} onChangeText ={(text) => setInput(text)}
             style={{fontSize: 18, 
              marginLeft: 10,
              
              color:'black',
              fontWeight:'bold',
             width:Dimensions.get('window').width-100,
              backgroundColor:'white',
              padding:20,
              borderRadius:10,
              

            }}
            placeholder="Search for Project"
            placeholderTextColor="red"
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}










{/*<MustElectricalEngineering electricalEngineering={electricalEngineering.filter(
  (item) => item.CourseName === 'Electrical Engineering' && item.university === 'Mbeya University' )} 
input={input} setInput={setInput}/>*/}


{/*FOR APIS */}


  { isPending ? (

<View style={{
  justifyContent:'center',
  alignItems:'center',
}}>
  

  <ActivityIndicator size="large" color="red" /> 
  </View>
  ): (
<MustElectricalEngineering electricalEngineering={electricalEngineering} input={input} setInput={setInput} />

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
