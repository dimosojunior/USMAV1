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
import useFetch from '../useFetch';

// kama unatumia APIS toa hiyo projects prop


// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;



const AI =({navigation }) => {


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





 // FOR AI ARTICLES
 // const [AiArticles, setAiArticles] = useState([
 //  {
 //    Title:'How to Start lerning AI',
 //    Github:'Dodoma ',
 //    ArticleImage:require('../assets/1q.jpeg'),
 //    ArticleBody:'AI Articles',
 //    ShortDescription:'<p style=\"text-align:center\"><span style=\"color:#e74c3c\"><strong>SMART INVIGILATION SYSTEM</strong></span></p>\r\n\r\n<p>Examination cheating activities like face movement, head movements,',
 //    WrittenBy:'Dimoso',
 //    id:'1'
 //  },


 //  {
 //    Title:'AI Projects',
 //    Github:'Dar es salaam',
 //    ArticleImage:require('../assets/3q.jpeg'),  
 //    ArticleBody:'AI Articles',
 //    ShortDescription:'My Article',
 //    WrittenBy:'Junior',
 //    id:'2'
 //  },



 //  {
 //    Title:'Learn Machine Lerning',
 //    Github:'Morogoro',
 //    ArticleImage:require('../assets/2q.jpeg'), 
 //    ArticleBody:'AI Articles',
 //    ShortDescription:'My Article',
 //    WrittenBy:'Zack',
 //    id:'3'
 //  },

 //  {
 //    Title:'How to Start lerning AI',
 //    Github:'Dodoma ',
 //    ArticleImage:require('../assets/1q.jpeg'),
 //    ArticleBody:'AI Articles',
 //    ShortDescription:'My Article',
 //    WrittenBy:'Dimoso',
 //    id:'4'
 //  },


 //  {
 //    Title:'AI Projects',
 //    Github:'Dar es salaam',
 //    ArticleImage:require('../assets/3q.jpeg'),  
 //    ArticleBody:'AI Articles',
 //    ShortDescription:'My Article',
 //    WrittenBy:'Junior',
 //    id:'5'
 //  },



 //  {
 //    Title:'Learn Machine Lerning',
 //    Github:'Morogoro',
 //    ArticleImage:require('../assets/2q.jpeg'), 
 //    ArticleBody:'AI Articles',
 //    ShortDescription:'My Article',
 //    WrittenBy:'Zack',
 //    id:'6'
 //  },

  
 //    ]);



 //FOR ARTICLES APIS
const { universities:AiArticles, isPending, error } = useFetch('https://freeprojectsshareapp.pythonanywhere.com/apis/AIArticles');








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


      { item.ArticleImage ? (
        <Image
          style={globalstyles.Expertimage}
          source={{uri: item.ArticleImage}}
          //source={item.ArticleImage} 
          resizeMode='contain'
          contentContainerStyle={{ padding: 20 }}
        />
        ):(

          <Image 
          source={require('../assets/ARTICLES/ai.jpeg')}  
           style={globalstyles.Expertimage}
          
          //source={item.ArticleImage} 
          resizeMode='contain'
          contentContainerStyle={{ padding: 20 }}
          
          />
          )}

        
        <View style={[globalstyles.wrapText,{backgroundColor:theme.backgroundColor}]}>
          <Text style={[globalstyles.fontSize,{color:theme.color}]}>
          {item.Title}  
          </Text>
          {/*<Text style={globalstyles.place}>
          {item.StudentPlace}  
          `</Text>*/}

           


          
      <TouchableOpacity 
      onPress={() => navigation.navigate('Read Article', item)}>
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


 if(item.Title.toLowerCase().includes(input.toLowerCase())){





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


      
        { item.ArticleImage ? (
        <Image
          style={globalstyles.Expertimage}
          source={{uri: item.ArticleImage}}
          //source={item.ArticleImage} 
          resizeMode='contain'
          contentContainerStyle={{ padding: 20 }}
        />
        ):(

          <Image 
          source={require('../assets/ARTICLES/ai.jpeg')}  
           style={globalstyles.Expertimage}
          
          //source={item.ArticleImage} 
          resizeMode='contain'
          contentContainerStyle={{ padding: 20 }}
          
          />
          )}

        
        <View style={[globalstyles.wrapText,{backgroundColor:theme.backgroundColor}]}>
          <Text style={[globalstyles.fontSize,{color:theme.color}]}>
          {item.Title}  
          </Text>
          {/*<Text style={globalstyles.place}>
          {item.StudentPlace}  
          `</Text>*/}

           


          
      <TouchableOpacity 
      onPress={() => navigation.navigate('Read Article', item)}>
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
            placeholder="Search Article"
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}







<TouchableOpacity>
<Text style={[globalstyles.universityheadertext,{color:theme.color}]}>ARTIFICIAL INTELLIGENCE ARTICLES</Text>
</TouchableOpacity>






        { isPending ? (

        <View style={{
          justifyContent:'center',
          alignItems:'center',
        }}>
          

          <ActivityIndicator size="large" color="red" /> 
          </View>
          ): (

          <Animated.FlatList
            data={AiArticles}
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






  
export default AI;



const styles = StyleSheet.create({
 

});