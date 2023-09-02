import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Dimensions } from 'react-native';



const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


 
const GlobalStyles =() => {

  //FOR fontFamily
// let [fontsLoaded] = useFonts({
//     'RobotoLight': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
//     'poppins': require('../assets/fonts/Poppins/Poppins-Black.ttf'),
//     'SerifRegular': require('../assets/fonts/Serif/PTSerif-Regular.ttf'),
//     'SerifItalic': require('../assets/fonts/Serif/PTSerif-Italic.ttf'),
//     'SerifBold': require('../assets/fonts/Serif/PTSerif-Bold.ttf'),
    
  
// });

// if (!fontsLoaded) {
//   return null; //<AppLoading />
// }

  return(

    <View>
      <Text>Gloal Styles</Text>
    </View>
    );


}
export default GlobalStyles;


export const globalstyles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'black',
    // width:Dimensions.get('screen').width,
    // resizeMode:'contain'
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },

UniversitiesText:{
  // fontFamily:'SerifRegular',
  fontSize: 20, 

},


seeAllText:{
  // fontFamily:'SerifRegular',
  fontSize: 18, 

},


//----------------------ARTICLE.JS---------------
 Articlesheadertext:{
    textAlign:'center',
    fontSize:20,
    //fontWeight:'bold',
    color:'white',
    marginBottom:10,
    marginTop:0,
    // fontFamily:'SerifRegular',
    
  
  },
  articleName:{
    // fontFamily:'SerifRegular',
    
  },
  Profilecontainer:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    padding:24,
    marginTop:60

  },
  titleText:{
    color:'red',
    fontSize:25,
    textAlign:'center',
  },
  // allUniversity:{
  //   width:'100%',
  // height:200,



  // },

  // universityName:{
  //  width:'80%',
  //   fontSize:18,
  //   backgroundColor:'white',
  //   marginTop:5,
  //   borderRadius:5,
  //   textAlign:'center'
  // },
  universityheadertext:{
    textAlign:'center',
    fontSize:18,
    //fontWeight:'bold',
    color:'red',
    marginBottom:20,
    marginTop:20,
    // fontFamily:'SerifRegular',
  },

  detalModule:{
    // justifyContent:'center',
    // alignItems:'center',
    marginTop:5,
    flex:1,
    // backgroundColor:'black',

  },
  singleInfo:{
    textAlign:'center',
    fontSize:18,
    // color:'white',

  },
  rating:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:'16',
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:'green',
  },

  ratingImage:{
    width:'100%',
    height:100,
    justifyContent:'center',
    alignItems:'center'
  },
  detailpagecontainer:{
    flex:1,
    backgroundColor:'#fff',
    //marginTop:70,
  },
  // aboutpagecontainer:{
  //   flex:1,
  //   backgroundColor:'#fff',
  //   marginTop:120,

  // },

  // input: {
  //   borderWidth: 1,
  //   borderColor: '#ddd',
  //   padding: 10,
  //   fontSize: 18,
  //   borderRadius: 10,
  //   marginHorizontal:10,
  //   marginVertical:10,
  // },
  // formheadertext:{
  //   fontSize:30,
  //   color:'blue',
  //   textAlign:'center',
  //   fontWeight:'bold',
  // },
  // modalToggle: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: 10,
  //   borderWidth: 1,
  //   borderColor: '#f2f2f2',
  //   padding: 10,
  //   borderRadius: 10,
  //   alignSelf: 'center',
  // },
  // modalClose: {
  //   marginTop: 20,
  //   marginBottom: 0,
  // },
  // modalContent: {
  //   flex: 1,
  // },
  errorText:{
  //   color:'red',
  //   fontWeight:'bold',
  //   marginBottom:10,
  //   marginTop:6,
  //   textAlign:'center',
  },











// ------------------ALL UNIVERSITIES FILES-------------
// 366 line

 listContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    // backgroundColor: 'black',
    margin: 10,
    borderRadius: 20,

  },
  imageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor:'red'
  },
  image: {
    width: '100%',
     height: undefined, 
     aspectRatio: 1
   },
  nameText: {
    // fontFamily:'SerifRegular',
    color: 'white',
    //fontWeight: 'bold',
    marginLeft: 15,
    fontSize:16,
    
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    // fontFamily:'SerifRegular',
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





  //--------------------------READ PROJECT-------------

  
    headerImage:{
      width:30,
      height:30,
      // marginHorizontal:10,
      marginTop:0,
      borderRadius:20,
      marginRight:10,
      marginBottom:0
    },

    detailModule:{
       width:Dimensions.get('window').width,
       marginHorizontal:0,

       //backgroundColor:'red',

    },
    singleInfo:{
      fontSize:18,
      margin:4,
      color:'white'

    },
    body:{
      width:Dimensions.get('window').width,
      elevation:3,
    backgroundColor:'white',
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:1,
    shadowRadius:2,
    marginHorizontal:0,
    marginVertical:0,
    paddingHorizontal:10,
    borderRadius:4


    },
    bodyText:{
      width:Dimensions.get('window').width-33,
      margin:10,
      //backgroundColor:'red',


    },
    bodyTextMsg:{
      fontSize:18,
      lineHeight:30,
    },

    //  pdf: {
    //     flex:1,
    //     width:Dimensions.get('window').width,
    //     height:Dimensions.get('window').height,
    // }

     buttonContainer: {
        margin: 10,
        padding:10,
        borderRadius:10,
    },
    linking:{
      width:Dimensions.get('window').width,
      flexDirection:'column',
      backgroundColor:'#2B3856',
      justifyContent:'center',

    },








//-------------------------------ALL ARTICLES----------


 fontSize: {
    fontSize: 18,
    color:'blue',
    // fontFamily:'SerifRegular',
    //textAlign:'center'
  },
  place: {
    fontSize: 18,
    color:'red',
    // fontFamily:'SerifRegular',
    //textAlign:'center'
  },
  ShortDescription:{
    fontSize: 18,
    // fontFamily:'SerifRegular',

  },
  Expertimage: {
    width: 80,
    height: 80,
    borderRadius:45,
    marginRight:10,
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },




item: {
    flexDirection: 'row',
    //justifyContent:'space-around',
    alignItems:'center',
    marginBottom: marginBottomItem,
    borderRadius: 10,
    backgroundColor: '#E3E4FA',
    borderColor:'#E3E4FA',
    borderWidth:0.5,
    //elevation:6,
    shadowColor: 'black',
    shadowOffset: {
      width: 1.5,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 30,
    paddingLeft: 10,
    marginHorizontal:0,
    paddingVertical:5
  },






  // ---------------------READ EXPERT.js-------------------



  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 18,
    //fontWeight: 'bold',
    // fontFamily:'SerifRegular',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    //fontWeight: '500',
    // fontFamily:'SerifRegular',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    //borderBottomColor: '#dddddd',
    //borderBottomWidth: 1,
   // borderTopColor: '#dddddd',
    //borderTopWidth: 1,
    paddingHorizontal:15,
    paddingVertical:20,
    backgroundColor:'white',
    borderRadius:5
    //flexDirection: 'row',
    //height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },








  // ----------------------SETTINGS.JS---------------------

   headerSettingPage: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
    // fontFamily:'SerifRegular',
  },
  titleSettingPage: {
    fontSize: 32,
    //fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    // fontFamily:'SerifRegular',
  },
  subtitleSettingPage: {
    fontSize: 15,
    //fontWeight: '500',
    color: '#929292',
    // fontFamily:'SerifRegular',
  },
  profile: {
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#3d3d3d',
    // fontFamily:'SerifRegular',
  },
  profileHandle: {
    marginTop: 4,
    fontSize: 15,
    color: '#989898',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  tabs: {
    padding: 16,
    flexDirection: 'row',
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  tabWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderColor: '#e5e7eb',
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    marginLeft: 5,
    // fontFamily:'SerifRegular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    paddingLeft: 24,
    paddingRight: 24,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#2c2c2c',
    // fontFamily:'SerifRegular',
  },
  rowValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#7f7f7f',
    marginRight: 4,
    // fontFamily:'SerifRegular',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  containerSettingPage: {
    paddingVertical: 24,
  },
  contentSettingPage: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    // fontFamily:'SerifRegular',
  },











  //---------------------LOGIN.JS-----------------------

  containerLogin: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  headerLogin: {
    marginVertical: 36,
  },
  headerImgLogin: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 36,
    borderRadius:50,
  },
  titleLogin: {
    fontSize: 27,
    //fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
    // fontFamily:'SerifRegular',
  },
  subtitleLogin: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
    // fontFamily:'SerifRegular',
  },
  formLogin: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formActionLogin: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    //fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
    // fontFamily:'SerifRegular',
  },
  inputLogin: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
    // fontFamily:'SerifRegular',
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btnLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnTextLogin: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
    // fontFamily:'SerifRegular',
  },
 











//-----------------------------ABOUT.JS-------------

 containerAbout:{
    flex:1,
    marginBottom:50,

  },
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    flex:1,
    marginBottom:50,
  },

  imgStyle: {
    width: Dimensions.get('window').width-20,
    height: 200,
    borderRadius: 10,
  },
  mainHeader: {
    fontSize: 16,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "bold",
    // marginTop: 50,
    marginTop: 20,
    marginBottom: 10,
    // fontFamily:'SerifRegular',
    
  },
  paraStyle: {
    fontSize: 18,
    color: "black",
    paddingBottom: 30,
    // fontFamily:'SerifRegular',
    
  },
  aboutLayout: {
    backgroundColor: "white",
    paddingHorizontal: 0,
    // marginVertical: 30,
    marginTop: 20,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "black",
    textTransform: "uppercase",
    //fontWeight: "500",
    marginVertical: 15,
    // fontFamily:'SerifRegular',
      alignSelf: "center",
  },
  aboutPara: {
    color: "black",
    fontSize: 18,
    // fontFamily: "WorkSans_400Regular",
    lineHeight: 26,
    elevation:3,
    // fontFamily:'SerifRegular',
  //backgroundColor:'white',
  shadowOffset:{width:1, height:1},
  shadowColor:'#333',
  shadowOpacity:1,
  shadowRadius:2,
  borderRadius:6,
  paddingVertical:10,
  paddingHorizontal:30
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
    borderRadius:60,
  },












  //-----------------------HEADER.JS------------------


   headerHeaderFile: {      
        width:Dimensions.get('window').width,
        height:70,
        flexDirection: 'row',
        
        // alignItems: 'flex-start',
        marginLeft:0,
        paddingLeft:0,
        //backgroundColor: 'black',  //"#2B3856",
        marginBottom:10,
        
        justifyContent:'space-between',
        //elevation:18,
    
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:1,
    shadowRadius:2,
    marginHorizontal:0,
    marginVertical:0,
    paddingHorizontal:0,

        //paddingVertical:15,
        
        


    },
    headerTextHeaderFile: {
      //fontWeight: 'bold',
      fontSize: 18,
      color: 'white',
      letterSpacing: 1,

      // flex:1,
      alignItems:"center",
      marginTop:10,
      // fontFamily:'SerifRegular',

      
    },
    iconHeaderFile: {
      position: 'relative',
      marginLeft:10,
      
      //flex:1,
      color:'white',
      fontWeight:'bold',
      marginTop:0,

      fontSize:35,
      

    },

    headerImageHeaderFile:{
      width:40,
      height:40,
      // marginHorizontal:10,
      marginTop:0,
      borderRadius:20,
      marginRight:10,
      marginBottom:0
    },













  //-------------------------ARTICLE HEADER.JS----------

  headerArticleHeaderFile: {      
        width:Dimensions.get('screen').width,
        height:140,
        flexDirection: 'row',
        
        // alignItems: 'flex-start',
        marginLeft:0,
        paddingLeft:0,
        backgroundColor:"black",
        
        


    },
    headerTextArticleHeaderFile: {
      //fontWeight: 'bold',
      // fontFamily:'SerifRegular',

      fontSize:18,
      textAlign:'center',
      // marginLeft:30,
      //color:'white',
      //fontWeight:'bold',
      marginHorizontal:30,
      
    },
    iconArticleHeaderFile: {
      position: 'relative',
      marginLeft:5,
      flexDirection:'row',
      flex:0.5,
      color:'wite',
      fontWeight:'bold',
      marginTop:20,
      fontSize:40,
      

    },

    headerImageArticleHeaderFile:{
      width:50,
      height:50,
      marginHorizontal:10,
      marginTop:80,
      borderRadius:10,
    },
     headerImageArticleHeaderFile:{
      width:30,
      height:30,
      // marginHorizontal:10,
      marginTop:0,
      borderRadius:20,
      marginRight:10,
      marginBottom:0
    },



  
  });

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
};
