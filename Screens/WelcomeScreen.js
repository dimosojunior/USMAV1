import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import useFetch from '../useFetch';
import axios from 'axios';

// import HomeScreenCard from '../Shared/HomeScreenCard';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Welcome =({navigation}) => {
  //const navigation = useNavigation();

  const [onboardings, setOnboardings] = useState([
    {
      Title:'One',
      Description:'Learn as much as you can while you are young since life becomes too busy later',
     OnboardingImage:require('../assets/u2.png'), 
      id:'1'
    },
    {
      Title:'Two',
      Description:'Education is our passport to the future, for tomorrow belongs to the people who prepare for it today',
     OnboardingImage:require('../assets/s2.png'),  
      id:'2'},
    {
      Title:'Three',
      Description:'Learning is a tressure that will follow its owner everywhere',
      OnboardingImage:require('../assets/s3.png'), 
      id:'3'
    },
 
    ]);
  
 //FOR UNIVERSITY APIS
//const { onboardings, isPending, error } = useFetch('https://dd83-197-250-225-180.eu.ngrok.io/apis/onboardings');
//https://myapis.pythonanywhere.com/authentication/user_list_view/

 const {width, height} = Dimensions.get('window');
 const Slide = ({item}) => {
  return (

          <View 
          style={{
            alignItems: 'center',
            height:height/2

          }}>

       


           <View 
          style={{
            alignItems: 'center',
            width:width,
            justifyContent:'center',
            marginTop:0,


          }}>

      <Image
        source={item?.OnboardingImage}
        style={{height: height/2+150, 
          width:width-50,
          borderRadius:5,

        }}
      /></View>


      <View style={{
        
        width:width,
        paddingHorizontal:20,
        alignItems:'center',
        marginTop:50,

      }}>
        <Text style={styles.title}>{item?.Description}</Text>
       
      </View>
    </View>


      );
};




const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != onboardings.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };




  const skip = () => {
    const lastSlideIndex = onboardings.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          

          
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
            
            height:height/14
          }}>
          {/* Render indicator */}
          {onboardings.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor:'red',
                  width: 15,
                  height:15,
                  borderRadius:10,
                },
              ]}
            />
          ))}
        </View>

        
        <View style={{marginBottom: 40}}>
          {currentSlideIndex == onboardings.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.getstarted}
                onPress={() => navigation.navigate('Home Stack')}>
                <Text style={{
                  fontWeight: 'bold', 
                  fontSize: 16,
                 
                  color:'black',
                  padding:10,
                  borderRadius:10
                }}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : null }

         
            <View style={{flexDirection: 'row'}}>
            {/*kwa ajili ya viradio*/}

              <View style={{width: 15}} />
            
            </View>
          
        </View>
      </View>
    );
  };


 
  return (


    
    

  // {<Header />}


// {mwanzo wa list za modules}
<View style={{flex: 1,
width: Dimensions.get('window').width,
height:height,
backgroundColor:'white',
flex:1,
}}>




{/*mwanzo wa flat list*/}


 


<FlatList 
keyExtractor={item => item.id}
ref={ref}
onMomentumScrollEnd={updateCurrentSlideIndex}
// contentContainerStyle={{height: height/2 + 100}}
showsHorizontalScrollIndicator={false}
horizontal
data={onboardings}
pagingEnabled
// contentContainerStyle={{
//   marginTop:10,
//   paddingBottom:30,
//   flex:1,
//   flexDirection:'row',
// }}
// numColumns ={2} 

renderItem = {({item}) => <Slide item={item}/>}

/>
  
<Footer />


{/*mwisho wa flat list*/}

















</View>




     
  );
}
export default Welcome;

const styles = StyleSheet.create({
 // header:{
 //  width:'100',
 // height:'15%',
 // backgroundColor:'#c8c8c8',
 // alignItems:'center',
 // justifyContent:'center',
 // },


subtitle: {
    color:'white',
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color:'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    lineHeight:20,
    // textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 15,
    width: 15,
    backgroundColor: 'green',
    marginHorizontal: 3,
    borderRadius: 10,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  getstarted:{
    flex: 1,
    
    borderRadius: 5,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',

  },


    });
