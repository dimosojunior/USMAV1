import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';
import {globalstyles} from '../Styles/global';
import Card from '../Shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import useFetch from '../useFetch';
import axios from 'axios';
import Header from '../Shared/header';
// import HomeScreenCard from '../Shared/HomeScreenCard';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MotiView} from 'moti';
// kama unatumia APIS toa hiyo projects prop
const ProjectCourseDetailPage =({projects}) => {


  const navigation = useNavigation();

  // const [universities, setUniversities] = useState([
  // {UniversityName:'University of Dodoma ',UniversityPlace:'Dodoma ',UniversityImage:require('../assets/udom.jpg'), rating:3,id:'1'},
  //   {UniversityName:'University of Dar es salaam',UniversityPlace:'Dar es salaam',UniversityImage:require('../assets/udsm.jpeg'),  rating:2,id:'2'},
  //   {UniversityName:'Muhimbili University',UniversityPlace:'Dar es salaam',UniversityImage:require('../assets/muhimbili.jpg'), rating:5,id:'3'},
  //   {UniversityName:'Mzumbe University',UniversityPlace:'Morogoro',UniversityImage:require('../assets/mzumbe.jpeg'), rating:3,id:'4'},
  //   {UniversityName:'DIT ',UniversityPlace:'Dar es salaam',UniversityImage:require('../assets/dit.jpeg'), rating:5,id:'5'},
  //   {UniversityName:'Mbeya University',UniversityPlace:'Morogoro',UniversityImage:require('../assets/must.jpg'), rating:2,id:'6'},
  //   {UniversityName:'Muhimbili University',UniversityPlace:'Dar es salaam',UniversityImage:require('../assets/must.jpg'), rating:5,id:'7'},
  //   {UniversityName:'Mzumbe University',UniversityPlace:'Morogoro',UniversityImage:require('../assets/muhimbili.jpg'), rating:3,id:'8'},
  //   {UniversityName:'DIT ',UniversityPlace:'Dar es salaam',UniversityImage:require('../assets/udsm.jpeg'), rating:5,id:'9'},
  //   {UniversityName:'Mbeya University',UniversityPlace:'Morogoro',UniversityImage:require('../assets/udom.jpg'), rating:2,id:'10'},
   
  //   ]);
  
 //FOR UNIVERSITY APIS
//const { universities, isPending, error } = useFetch('https://eb56-197-250-197-195.eu.ngrok.io/apis/Universities');
//https://myapis.pythonanywhere.com/authentication/user_list_view/

 const {width, height} = Dimensions.get('window');
 


// MWANZO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE


  const renderItem = ({item, index}) => {
    return (
      
      <MotiView
        style={styles.listContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>

      
        <View style={styles.imageContainer}>
        { item.CourseImage ? (
          <Image 
          // kama unatumia APIS
          //source={{uri: item.CourseImage}}
          source={item.CourseImage} 
          style={styles.image} 
          />
          ):(
          <Image 
          source={require('../assets/3q.jpeg')}  
          style={styles.image} 
          />

          )}
        </View>

        <Text style={styles.nameText}>{item.CourseName}</Text>
        {/*<Text style={styles.priceText}>{item.price}</Text>*/}
         
         <TouchableOpacity onPress={() => navigation.navigate('Course Projects', item)}>

          <View style={styles.button}>
            <Text style={styles.buttonText}>View</Text>
          </View>

        </TouchableOpacity>


      </MotiView>
    );
  };

// MWISHO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE



  return (



    <View style={styles.container}>
    





<TouchableOpacity>
<Text style={globalstyles.universityheadertext}>ALL COURSES</Text>
</TouchableOpacity>
















{/*{MWANZO WA FLAT LIST COLUMN MBILI}*/}
      <FlatList
        data={projects}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        //horizontal
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
// {MWISHO WA FLAT LIST COLUMN MBILI}



  );
};






  
export default ProjectCourseDetailPage;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FD',

  },
  listContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  imageContainer: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {width: '100%', height: undefined, aspectRatio: 1},
  nameText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#151B54',
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});