import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {globalstyles} from '../Styles/global';
import { useNavigation } from '@react-navigation/native';
export default function Login({navigation}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (


    <View style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
    <ScrollView>
      <View style={globalstyles.containerLogin}>
        <View style={globalstyles.headerLogin}>
          <Image
            alt=""
            resizeMode="contain"
            style={globalstyles.headerImgLogin}
            source={require('../assets/1q.jpeg')}
          />

          <Text style={globalstyles.titleLogin}>
            Sign in to <Text style={{ color: '#075eec' }}>USMA</Text>
          </Text>

          
        </View>

        <View style={globalstyles.formLogin}>
          <View style={globalstyles.inputLogin}>
            <Text style={globalstyles.inputLabel}>Email address</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={globalstyles.inputControl}
              value={form.email}
            />
          </View>

          <View style={globalstyles.inputLogin}>
            <Text style={globalstyles.inputLabel}>Password</Text>

            <TextInput
              autoCorrect={false}
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={globalstyles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={globalstyles.formActionLogin}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
                 navigation.navigate('Home Stack')
              }}>
              <View style={globalstyles.btnLogin}>
                <Text style={globalstyles.btnTextLogin}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle link
               navigation.navigate('Signup Stack')
            }}
            style={{ marginTop: 'auto' }}>
            <Text style={globalstyles.formFooter}>
              Don't have an account?{' '}
              <Text style={{ textDecorationLine: 'none' }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      </ScrollView>
    </View>

    
  );
}

const styles = StyleSheet.create({
  
});