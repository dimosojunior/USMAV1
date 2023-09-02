import 'react-native-gesture-handler';
import 'react-native-reanimated';

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

// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';

// kama unatumia APIS toa hiyo projects prop
const DitComputerEngineering =({computerEngineeringProjects,input, setInput}) => {

  // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)


  const navigation = useNavigation();

 
 const {width, height} = Dimensions.get('window');
 


// MWANZO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE


  const renderItem = ({item, index}) => {

    // mwanzo kwa ajili ya search
    if (input === ""){






    return (
      
      <MotiView
        style={[globalstyles.listContainer,{backgroundColor:theme.backgroundColor}]}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>

      
        <View style={globalstyles.imageContainer}>
        { item.ProjectImage ? (
          <Image 
          // kama unatumia APIS
          source={{uri: item.ProjectImage}}
          //source={item.ProjectImage} 
          style={globalstyles.image} 
          />
          ):(
          <Image 
          source={require('../assets/3q.jpeg')}  
          style={globalstyles.image} 
          />

          )}
        </View>

        <Text style={[globalstyles.nameText,{color:theme.color}]}>{item.ProjectName}</Text>
        {/*<Text style={globalstyles.priceText}>{item.price}</Text>*/}
         
         <TouchableOpacity onPress={() => navigation.navigate('Read Project', item)}>

          <View style={globalstyles.button}>
            <Text style={globalstyles.buttonText}>View</Text>
          </View>

        </TouchableOpacity>


      </MotiView>
    );












    
// hili bano la chini ni la if ya juu kama mtu akitype   
}


 if(item.ProjectName.toLowerCase().includes(input.toLowerCase())){






    return (
      
      <MotiView
        style={[globalstyles.listContainer,{backgroundColor:theme.backgroundColor}]}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>

      
        <View style={globalstyles.imageContainer}>
        { item.ProjectImage ? (
          <Image 
          // kama unatumia APIS
          source={{uri: item.ProjectImage}}
          //source={item.ProjectImage} 
          style={globalstyles.image} 
          />
          ):(
          <Image 
          source={require('../assets/3q.jpeg')}  
          style={globalstyles.image} 
          />

          )}
        </View>

        <Text style={[globalstyles.nameText,{color:theme.color}]}>{item.ProjectName}</Text>
        {/*<Text style={globalstyles.priceText}>{item.price}</Text>*/}
         
         <TouchableOpacity onPress={() => navigation.navigate('Read Project', item)}>

          <View style={globalstyles.button}>
            <Text style={globalstyles.buttonText}>View</Text>
          </View>

        </TouchableOpacity>


      </MotiView>
    );











// hili bano la chini ni la if ya pili mwisho
  }










 // hili bano la chini ni la renderItem mwisho
  };

// MWISHO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE



  return (



    <View style={[globalstyles.container,{backgroundColor:theme.backgroundColor}]}>
    





<TouchableOpacity>
<Text style={[globalstyles.universityheadertext,{color:theme.color}]}>DIT Computer Engineering Projects</Text>
</TouchableOpacity>
















{/*{MWANZO WA FLAT LIST COLUMN MBILI}*/}
      <FlatList
        data={computerEngineeringProjects}
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






  
export default DitComputerEngineering;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',

  },
  
});