import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';
import {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../Shared/header';
import Home from '../Screens/HomeScreen';
import ViewDetail from '../Screens/ViewDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import HomeTab from '../Tab/HomeTab';
import DetailPageHeader from '../Shared/DetailPageHeader';
import Welcome from '../Screens/WelcomeScreen';
import  SpecificCourseProject from '../Screens/SpecificCourseProjectScreen';


import  ReadProject from '../Screens/ReadProjectScreen';
import  ReadArticle from '../Articles/ReadArticle';
import  ReadExpert from '../Hob/ReadExpert';


import AsyncStorage from '@react-native-async-storage/async-storage';

import Udom from '../Universities/UdomScreen';
import Udsm from '../Universities/UdsmScreen';
import Must from '../Universities/MustScreen';
import Dit from '../Universities/DitScreen';

import UdomComputerEngineeringProjects from '../UdomProjectsScreens/ComputerEngineeringProjectsScreen';
import UdomIctProjects from '../UdomProjectsScreens/IctScreen';
import UdomElectricalEngineeringProjects from '../UdomProjectsScreens/ElectricalEngineeringScreen';
import UdomOtherProjectsScreen from '../UdomProjectsScreens/OtherProjectsScreen';


import UdsmComputerEngineeringProjects from '../UdsmProjectsScreens/ComputerEngineeringProjectsScreen';
import UdsmElectricalEngineeringProjects from '../UdsmProjectsScreens/ElectricalEngineeringScreen';
import UdsmIctProjects from '../UdsmProjectsScreens/IctScreen';
import UdsmOtherProjectsScreen from '../UdsmProjectsScreens/OtherProjectsScreen';


import MustComputerEngineeringProjects from '../MustProjectsScreens/ComputerEngineeringProjectsScreen';
import MustElectricalEngineeringProjects from '../MustProjectsScreens/ElectricalEngineeringScreen';
import MustIctProjects from '../MustProjectsScreens/IctScreen';
import MustOtherProjectsScreen from '../MustProjectsScreens/OtherProjectsScreen';


import DitComputerEngineeringProjects from '../DitProjectsScreens/ComputerEngineeringProjectsScreen';
import DitElectricalEngineeringProjects from '../DitProjectsScreens/ElectricalEngineeringScreen';
import DitIctProjects from '../DitProjectsScreens/IctScreen';
import DitOtherProjectsScreen from '../DitProjectsScreens/OtherProjectsScreen';






import AI from '../Articles/AIArticles';
import Website from '../Articles/WebsiteArticles';
import MobileApp from '../Articles/MobileAppArticles';


import GraphicsDesigner from '../Hob/GraphicsDesignerScreen';
import AutomationExperts from '../Hob/AutomationExpertsScreen';
import ComputerMaintenanceExperts from '../Hob/ComputerMaintenanceExpertsScreen';
import ComputerVisionExperts from '../Hob/ComputerVisionExpertsScreen';
import DataAnalysisandVisualizationExperts from '../Hob/DataAnalysisandVisualizationExpertsScreen';
import MachineLearningExperts from '../Hob/MachineLearningExpertsScreen';
import MobileApplicationsDevelopers from '../Hob/MobileApplicationsDevelopersScreen';
import WebsitesDevelopers from '../Hob/WebsitesDevelopersScreen';

const Stack = createStackNavigator();

const HomeStack =( {navigation}) => {

// hii ni kwa ajili ya zile slide za mwanzo km mtu ameshaingia na akaziona
// basi akiingia kwa mara ya pili asizione tena
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  
  useEffect(() => {
    async function check(){

     const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    console.log(appData);
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    }else {
      setIsAppFirstLaunched(false);
    }



    }
    check()
   
  }, []);

// mwisho hap wa hizo codes za slides za mwanzo
  return (

    isAppFirstLaunched != null &&(
  //kama unatumia drawer navigator na stack navigator haina haja ya kus
  //sorround hii stack.navigator na NavigationContainer ila km unatumia
  //stack navigation peke yake basi tumia NavigationContainer

// <NavigationContainer>
    <Stack.Navigator
    //initialRouteName="Welcome Stack"
      screenOptions={{
      	headerShown:false,
        //header:() => null,
        headerStyle:{
          backgroundColor:"wheat",
           //height:70,

        },
        headerTintColor:"white",
        headerTitleStyle: {
              fontWeight: 'bold',
            },
      }}
      >


      {isAppFirstLaunched && (
  
      <Stack.Screen
      name="Welcome Stack"
      component={Welcome}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />

      )}

      <Stack.Screen
      name="Home Stack"
      component={HomeTab} // instead of Home
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='' />,
      //     })}
      // options={{
      //   title:'Smart Invigilation System'
      // }}
      />

      <Stack.Screen
      name="Detail Page"
      component={ViewDetail}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />

       <Stack.Screen
      name="Course Projects"
      component={SpecificCourseProject}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


       <Stack.Screen
      name="Read Project"
      component={ReadProject}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />



        <Stack.Screen
      name="University of Dodoma"
      component={Udom}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


       <Stack.Screen
      name="University of Dar es salaam"
      component={Udsm}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


       <Stack.Screen
      name="Mbeya University"
      component={Must}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


        <Stack.Screen
      name="DIT"
      component={Dit}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />




        <Stack.Screen
      name="Udom Computer Engineering"
      component={UdomComputerEngineeringProjects}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


          <Stack.Screen
      name="Udom ICT"
      component={UdomIctProjects}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


          <Stack.Screen
      name="Udom Electrical Engineering"
      component={UdomElectricalEngineeringProjects}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


            <Stack.Screen
      name="Udom Other Projects"
      component={UdomOtherProjectsScreen}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />




   <Stack.Screen
      name="Udsm Computer Engineering"
      component={UdsmComputerEngineeringProjects}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />

      <Stack.Screen
      name="Udsm Electrical Engineering"
      component={UdsmElectricalEngineeringProjects}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


        <Stack.Screen
      name="Udsm ICT"
      component={UdsmIctProjects}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


        <Stack.Screen
      name="Udsm Other Projects"
      component={UdsmOtherProjectsScreen}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />








 <Stack.Screen
      name="Must Computer Engineering"
      component={MustComputerEngineeringProjects}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />

      <Stack.Screen
      name="Must Electrical Engineering"
      component={MustElectricalEngineeringProjects}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


        <Stack.Screen
      name="Must ICT"
      component={MustIctProjects}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


        <Stack.Screen
      name="Must Other Projects"
      component={MustOtherProjectsScreen}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />







<Stack.Screen
      name="Dit Computer Engineering"
      component={DitComputerEngineeringProjects}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />

      <Stack.Screen
      name="Dit Electrical Engineering"
      component={DitElectricalEngineeringProjects}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


        <Stack.Screen
      name="Dit ICT"
      component={DitIctProjects}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


        <Stack.Screen
      name="Dit Other Projects"
      component={DitOtherProjectsScreen}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />












    {/*-------  ARTICLES-----------------------------*/}





<Stack.Screen
      name="Read Article"
      component={ReadArticle}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />



      <Stack.Screen
      name="AI Articles"
      component={AI}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />



       <Stack.Screen
      name="Website Articles"
      component={Website}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


        <Stack.Screen
      name="Mobile Applications Articles"
      component={MobileApp}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />










    {/*---------------------------HOB-----------------*/}

       <Stack.Screen
      name="Graphics Designer"
      component={GraphicsDesigner}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


       <Stack.Screen
      name="Automation Experts"
      component={AutomationExperts}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />



       <Stack.Screen
      name="Computer Maintenance Experts"
      component={ComputerMaintenanceExperts}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


        <Stack.Screen
      name="Computer Vision Experts"
      component={ComputerVisionExperts}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


       <Stack.Screen
      name="Data Analysis and Visualization Experts"
      component={DataAnalysisandVisualizationExperts}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


       <Stack.Screen
      name="Machine Learning Experts"
      component={MachineLearningExperts}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


       <Stack.Screen
      name="Mobile Applications Developers"
      component={MobileApplicationsDevelopers}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />


       <Stack.Screen
      name="Websites Developers"
      component={WebsitesDevelopers}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />



        <Stack.Screen
      name="Read Expert"
      component={ReadExpert}

      // options={ () => ({ 
      //       headerLeft: () => <DetailPageHeader  title='' />,
      //     })}
      />




      </Stack.Navigator>
      	// </NavigationContainer>



) 
//bano la kufunga if is first launched


    );
  }
  export default HomeStack;