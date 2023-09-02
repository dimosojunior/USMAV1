import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, {useState, useEffect} from 'react';
import { StyleSheet,ActivityIndicator, Text, View, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';
import {globalstyles} from '../Styles/global';
import Card from '../Shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../Shared/header';

const Profile =({navigation}) => {

 const [loading, setLoding] = useState(true);
useEffect(() => {
	setTimeout(() =>{
		setLoding(false);
	},8000)
},[])

  const goToProfileDetailPage = () =>{
    navigation.navigate('Profile Detail Page'); 
   
  }
  return (
    <View style={globalstyles.container}>

    

{ loading ? 
		<ActivityIndicator size="large" color="red"/>
		:
		<Text style={{
			color:"red"
		}}>Hello Word</Text>
	}




     </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
 
  });
