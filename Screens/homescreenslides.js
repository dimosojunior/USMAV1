<TouchableOpacity>
<Text style={styles.universityslidingtext}>ALL MATERIALS</Text>
</TouchableOpacity>


{/*MWANZO WA FLAT LIST SLIDES HORIZONTAL*/}
{ universities? (
<Animated.FlatList 

data={universities}
keyExtractor={item => item.id}
showsHorizontalScrollIndicator={false}
horizontal
pagingEnabled
onScroll={Animated.event(
  [{ nativeEvent: { contentOffset:{ x: scrollX }}}],
  { useNativeDriver: true}
  )}
// numColumns ={2} 
renderItem = {({item, index}) => {



  const inputRange = [
    (index - 1) * width,
    index * width,
    (index + 1) * width

  ];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-width * .7, 0, width * .7]
  })
return (
<View style={{
  width,
height:ITEM_HEIGHT-400,
  // justifyContent:'center',
  alignItems:'center',
}}>

<View style={{
          borderRadius:18,
          borderWidth:0,
          width:Dimensions.get('window').width-20,
          // borderColor:'white',
          shadowColor:'#000',
          shadowOpacity:0.5,
          shadowRadius:30,
          shadowOffset:{
            width:0,
            height:0,
          },
          borderRadius:18,
          padding:5,
          backgroundColor:'white',
}}>
  <View  style={{
         
          height:ITEM_HEIGHT-250, 
          overflow:'hidden',
          alignItems:'center',
          borderRadius:14,
          
        }}
>
{ item.UniversityImage ? (
     <Animated.Image
     // kama unatumia APIS
       //source={{uri: item.UniversityImage}}

        source={item.UniversityImage}
        style={{
          width:Dimensions.get('window').width-20,
          height:ITEM_HEIGHT-150,
          resizeMode:'cover',
          transform: [
            {
              translateX,
            },
          ],

        }}
      />

):(

<Image source={require('../assets/3q.jpeg')} 
  style={{
          width:Dimensions.get('window').width-20,
          height:ITEM_HEIGHT-150,
          resizeMode:'cover',
          // transform: [
          //   {
          //     translateX,
          //   },
          // ],

        }}

/>
)}
  </View>

  { item.UniversityName ? (
<TouchableOpacity onPress={() => navigation.navigate('Detail Page', item)}>

<Text style={{
  textAlign:'center',
  marginBottom:80,
  fontSize:18,
  elevation:3,
  backgroundColor:'white',
  shadowOffset:{width:1, height:1},
  shadowColor:'#333',
  shadowOpacity:1,
  shadowRadius:2,
  borderRadius:6,
  paddingBottom:10,
  
}}>{item.UniversityName}</Text>

</TouchableOpacity>
) : (
<Text style={styles.universityslidingtext}>NO UNIVERSITY NAME</Text>
)}






  </View>

</View>


  )}}

/>

):(
<Text style={styles.universityslidingtext}>NO ANY UNIVERSITY ADDED</Text>

)}
{/*MWISHO WA FLAT LIST SLIDES HORIZONTAL*/}




