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
// kama unatumia APIS toa hiyo individualProjects prop
const IndividualProjectDetailPage =({individualProjects}) => {


  const navigation = useNavigation();


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
        { item.ProjectImage ? (
          <Image 
          // kama unatumia APIS
           //source={{uri: item.ProjectImage}}
          source={item.ProjectImage} 
          style={styles.image} 
          />
          ):(
          <Image 
          source={require('../assets/3q.jpeg')}  
          style={styles.image} 
          />

          )}
        </View>

        <Text style={styles.nameText}>{item.ProjectName}</Text>
        {/*<Text style={styles.priceText}>{item.price}</Text>*/}
         
         <TouchableOpacity onPress={() => navigation.navigate('Read Project', item)}>

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
<Text style={globalstyles.universityheadertext}>INDIVIDUAL PROJECTS</Text>
</TouchableOpacity>
















{/*{MWANZO WA FLAT LIST COLUMN MBILI}*/}
      <FlatList
        data={individualProjects}
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






  
export default IndividualProjectDetailPage;



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