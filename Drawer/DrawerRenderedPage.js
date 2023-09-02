import React from 'react';
import { View,Text,Image,Switch, StyleSheet } from 'react-native';
// import {
//     useTheme,
//     Avatar,
//     Title,
//     Text,
//     Text,
//     Drawer,
//     Text,
//     TouchableRipple,
//     Switch
// } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome} from '@expo/vector-icons';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

    // const paperTheme = useTheme();

    //const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Image 
                                source={require('../assets/1q.jpeg')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Dimoso El Junior</Title>
                                <Text style={styles.Text}>juniordimoso8@gmail.com</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Text style={[styles.Text, styles.Text]}>80</Text>
                                <Text style={styles.Text}>Following</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={[styles.Text, styles.Text]}>100</Text>
                                <Text style={styles.Text}>Followers</Text>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color="white"
                                size={34}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color="white"
                                size={34}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color="white"
                                size={34}
                                />
                            )}
                            label="Add University"
                            onPress={() => {props.navigation.navigate('Add University')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome 
                                name="user" 
                                color="white"
                                size={34}
                                />
                            )}
                            label="About Us"
                            onPress={() => {props.navigation.navigate('About')}}
                        />




                     <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome 
                                name="user" 
                                color="white"
                                size={34}
                                />
                            )}
                            label="Welcome Page"
                            onPress={() => {props.navigation.navigate('Welcome')}}
                        />




                     
                    </Drawer.Section>
                   {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>*/}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    Text: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    // Text: {
    //   fontWeight: 'bold',
    //   marginRight: 3,
    // },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });