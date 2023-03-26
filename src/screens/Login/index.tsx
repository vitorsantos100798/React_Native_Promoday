import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
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
          fontFamily: 'Poppins-Bold',
        }}>
        Descontos incríveis para você!
      </Text>
      <Input />
      <Input />
      <TouchableOpacity style={styles.containerButton}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      <Text>Crie uma conta grátis</Text>
    </View>
  );
}

export default Login;
