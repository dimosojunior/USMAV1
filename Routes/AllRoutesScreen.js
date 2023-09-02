import 'react-native-gesture-handler';
import 'react-native-reanimated';

import {
  ActivityIndicator,
  FlatList,
  
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';
import {globalstyles} from '../Styles/global';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ArticlesHeader from '../Shared/ArticlesHeader';
import{LinearGradient} from 'expo-linear-gradient';
import HTMLView from 'react-native-htmlview';
import Html from 'react-native-render-html';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';

// kama unatumia APIS toa hiyo projects prop


// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;



const AllRoutes =({navigation }) => {


  // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)

  // const navigation = useNavigation();
const goBackPage = () =>{
    navigation.goBack();

  }
 
 const {width, height} = Dimensions.get('window');
 

//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);



const htmlContent2 = '<p style=\"text-align:center\"><span style=\"color:#e74c3c\"><strong>SMART INVIGILATION SYSTEM</strong></span></p>\r\n\r\n<p>Examination cheating activities like face movement, head movements,'

const renderersProps ={
  img:{
    enableExperimentalPercentWidth:true
  }
}

 const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;





  const [routes, setRoutes] = useState([
  {RouteName:'Dar es salaam to Mwanza',RouteDescription:'This is Mwanza Route',RouteImage:require('../assets/udom.jpg'),id:'1'},
  {RouteName:'Dar es salaam to Mbeya',RouteDescription:'This is Mbeya Route',RouteImage:require('../assets/udsm.jpeg'),id:'2'},
  {RouteName:'Dar es salaam to Arusha',RouteDescription:'This is Arusha Route',RouteImage:require('../assets/must.jpg'),id:'3'},
  {RouteName:'Dar es salaam to Kigoma',RouteDescription:'This is Kigoma Route',RouteImage:require('../assets/dit.jpeg'),id:'4'},
 
    ]);



 //FOR Routes APIS
//const { universities:routes, isPending, error } = useFetch('https://a2ca-196-249-104-119.ngrok-free.app/apis/ComputerVisionExperts');








  const renderUser = ({ item, index }) => {

    // mwanzo kwa ajili ya search
    if (input === ""){



    const scale = Yscroll.interpolate({
      inputRange: [
        -1, 0,
        sizeOfItem * index,
        sizeOfItem * (index + 2)
      ],
      outputRange: [1, 1, 1, 0]
    })




// mwanzo kwa ajili ya search




    return (
      
      <Animated.View style={
        [globalstyles.item,
        {
          transform: [{ scale }]
        },
        ,{backgroundColor:theme.backgroundColor}
        ]
      }>


      
        <Image
          style={globalstyles.image}
          //source={{uri: item.RouteImage}}
          source={item.RouteImage} 
          resizeMode='contain'
          contentContainerStyle={{ padding: 20 }}
        />

        
        <View style={[globalstyles.wrapText,{backgroundColor:theme.backgroundColor}]}>
          <Text style={[globalstyles.fontSize,{color:theme.color}]}>
          {item.RouteName}  
          </Text>
          <Text style={globalstyles.place}>
          {/*{item.StudentPlace}  */}
          </Text>

           


          
      <TouchableOpacity 
      onPress={() => navigation.navigate('View Route', item)}>
     <View style={{
      justifyContent:'center',
      alignItems:'center',
      //backgroundColor:'red',
      marginTop:1,
      padding:1,
     }}>
    <MaterialCommunityIcons 
    name="gesture-tap-button" size={50} color="#46C7C7"
    style={{

    }} />
    

      </View>  
      </TouchableOpacity>   


        </View>


      </Animated.View>

      
    )





// hili bano la chini ni la if ya juu kama mtu akitype   
}


 if(item.RouteName.toLowerCase().includes(input.toLowerCase())){





const scale = Yscroll.interpolate({
      inputRange: [
        -1, 0,
        sizeOfItem * index,
        sizeOfItem * (index + 2)
      ],
      outputRange: [1, 1, 1, 0]
    })


    return (
      
      <Animated.View style={
        [globalstyles.item,
        {
          transform: [{ scale }]
        },
        ,{backgroundColor:theme.backgroundColor}
        ]
      }>


      
        <Image
          style={globalstyles.image}
          //source={{uri: item.RouteImage}}
          source={item.RouteImage} 
          resizeMode='contain'
          contentContainerStyle={{ padding: 20 }}
        />

        
        <View style={[globalstyles.wrapText,{backgroundColor:theme.backgroundColor}]}>
          <Text style={[globalstyles.fontSize,{color:theme.color}]}>
          {item.RouteName}  
          </Text>
          <Text style={globalstyles.place}>
          {/*{item.StudentPlace} */} 
          </Text>

           


          
      <TouchableOpacity 
      onPress={() => navigation.navigate('View Route', item)}>
     <View style={{
      justifyContent:'center',
      alignItems:'center',
      //backgroundColor:'red',
      marginTop:1,
      padding:1,
     }}>
    <MaterialCommunityIcons 
    name="gesture-tap-button" size={50} color="#46C7C7"
    style={{

    }} />
    

      </View>  
      </TouchableOpacity>   


        </View>


      </Animated.View>

      
    )


// hili bano la chini ni la if ya pili mwisho
  }


}
// hili bano la chini ni la renderItem mwisho












    
      
 return (
    <View style={[globalstyles.container,{backgroundColor:theme.backgroundColor}]}>
    







<ArticlesHeader />











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
            placeholder="Search Route"
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}







<TouchableOpacity>
<Text style={[globalstyles.universityheadertext,{color:theme.color}]}>ALL ROUTES</Text>
</TouchableOpacity>






      {
        isLoading ? <ActivityIndicator /> : (
          <Animated.FlatList
            data={routes}
            keyExtractor={item => `key-${item.id}`}
            renderItem={renderUser}
            contentContainerStyle={{
              padding: 20
            }}
            onScroll={
              Animated.event(
                [{ nativeEvent: { contentOffset: { y: Yscroll } } }],
                { useNativeDriver: true }
              )}
          />
        )
      }









</View>
  );
};






  
export default AllRoutes;



const styles = StyleSheet.create({
  
});