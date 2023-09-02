import React from 'react';
import { StyleSheet,FlatList, Text, View, Button,TouchableOpacity } from 'react-native';
import {globalstyles} from '../Styles/global';
import { Dimensions } from 'react-native';
export default function Search({data, input, setInput}){

	return(

		<View style={styles.card}>

		
<FlatList 

data={data}
renderItem={({item}) =>{
  if (input === ""){
    return (
      <View>
         <Text>{item.ProjectName}</Text>
      </View>
      )
  }

  if(item.ProjectName.toLowerCase().includes(input.toLowerCase())){

    return (
      <View>
         <Text>{item.ProjectName}</Text>
      </View>
      )

  }



  }}

/>


			

		</View>


		);
}


const styles = StyleSheet.create({
 

  });