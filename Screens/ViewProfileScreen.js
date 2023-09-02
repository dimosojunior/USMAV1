import 'react-native-gesture-handler';
import 'react-native-reanimated';

import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {globalstyles, images} from '../Styles/global';
import Card from '../Shared/card';

// kila navigation tunayoicreate kwenye routes/homeStack.js huwa inakuwa na 
  // props by default ko tunaitumia hiyo ili kupata page zilizopo kule
export default function ViewProfile({ navigation  }) {

  //FUNCTION YA KURUDI KWENY HOME PAGE
  
  const goToProfilePage = () =>{
    navigation.goBack();

  }
  return (
    <View style={globalstyles.detailpagecontainer}>
  <Card>
   
<Text>VIEW PROFILE SCREEN</Text>
</Card>
<Button title="Go to Profile page" onPress={goToProfilePage} />





    </View>
  );
}

