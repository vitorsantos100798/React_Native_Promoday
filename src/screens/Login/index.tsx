import React from 'react';
import {Image, View, Text} from 'react-native';
import {styles} from './styles';
import {Input} from '../../components/input/input';
function Login() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/splash.png')} />
      </View>
      <Text
        style={{
          fontFamily: 'arial',
        }}>
        Descontos incríveis para você!
      </Text>
      <Input />
    </View>
  );
}

export default Login;
