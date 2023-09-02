import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppLoading from 'expo-app-loading';
import Home from './Screens/HomeScreen';
import HomeStack from './Stack/HomeStack';
import MyDrawer from './Drawer/drawer';
import HomeTab from './Tab/HomeTab';

export default function App() {
  return (
    <View style={styles.container}>
     

  {/*<HomeStack />*/}

  <MyDrawer />
        <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // // // alignItems: 'center',
    // // // justifyContent: 'center',
    marginTop:30,
    // // padding:24,
  },
  });


