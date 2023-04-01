import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import styles from './styles';
function SucessRegistration({navigation}: NavigateScreenProps) {
  const navigateLogin = () => {
    navigation.navigate('login');
  };

  const image = require('../../assets/sucessRegistration.png');
  return (
    <View style={styles.container}>
      <View style={styles.margin}>
        <Image source={image} />
      </View>

      <Text style={styles.title}>Cadastro Realizado</Text>
      <Text style={styles.title}>Com Sucesso.</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={navigateLogin}
          activeOpacity={0.8}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SucessRegistration;
