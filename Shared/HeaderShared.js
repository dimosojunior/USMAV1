import React from 'react';
import { StyleSheet, Text,ScrollView, View, Button, Image,  TouchableOpacity} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {globalstyles} from '../Styles/global';
import { Ionicons, FontAwesome} from '@expo/vector-icons';

export default function HeaderShared(  {title} ) {
const navigation = useNavigation();
const {width, height} = Dimensions.get('window');
  const goToHomePage = () =>{
    navigation.goBack();

  }

  return (
  
<View style={globalstyles.container}>

{/*mwanzo wa view ya image na icon*/}
<View style={{
}}>
{/*mwanzo wa view ya icon na title*/}
<View style={{
  backgroundColor:'white',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-around'
}}>

<TouchableOpacity>
<Ionicons name='arrow-back-circle-outline' 
      size={32} onPress={goToHomePage}
      style={{
        marginLeft: 10,
      }}
        />
</TouchableOpacity>
    <Text style={{
      fontSize:22,
      textAlign:'center',
      // marginLeft:30,
      color:'blue',
      fontWeight:'bold',
    }}>USMA APP</Text>


<Image source={require('../assets/me.jpg')} 
  style={styles.headerImage} />


     </View>
{/*mwisho wa view ya icon na title*/}

 <Image
        source={require('../assets/3q.jpeg')}
        style={{width,
          marginTop:10,
          height:150,
        }}
      />
  
</View>
{/*mwisho wa view ya image na icon*/}
 




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

