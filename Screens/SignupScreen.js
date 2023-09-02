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

export default function Signup({navigation}) {
  const [form, setForm] = useState({
    email: '',
    username:'',
    password: '',
    confirm_password: '',
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
            Sign up to <Text style={{ color: '#075eec' }}>USMA</Text>
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
            <Text style={globalstyles.inputLabel}>Username </Text>

          <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              
              onChangeText={username => setForm({ ...form, username })}
              placeholder="UserName"
              placeholderTextColor="#6b7280"
              style={globalstyles.inputControl}
              value={form.username}
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

            <View style={globalstyles.inputLogin}>
            <Text style={globalstyles.inputLabel}>Confirm Password</Text>

            <TextInput
              autoCorrect={false}
              onChangeText={confirm_password => setForm({ ...form, confirm_password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={globalstyles.inputControl}
              secureTextEntry={true}
              value={form.confirm_password}
            />
          </View>





          <View style={globalstyles.formActionLogin}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
                navigation.navigate('Login Stack')
              }}>
              <View style={globalstyles.btnLogin}>
                <Text style={globalstyles.btnTextLogin}>Sign up</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
               navigation.navigate('Login Stack')
              // handle link
            }}
            style={{ marginTop: 'auto' }}>
            <Text style={globalstyles.formFooter}>
              Already  have an account?{' '}
              <Text style={{ textDecorationLine: 'none' }}>Sign in</Text>
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