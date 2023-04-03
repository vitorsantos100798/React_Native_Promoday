import React from 'react';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
function Profile({navigation}: NavigateScreenProps) {
  const navigateLogin = () => {
    navigation.navigate('login');
  };

  const image = require('../../assets/iconProfile.png');

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={image} />
      </TouchableOpacity>

      <Text style={styles.title}>Vitor Santos</Text>
      <Text style={styles.emailTitle}>vitorinacio@gmail.com</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={navigateLogin}
          activeOpacity={0.8}
          style={styles.button}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Profile;
