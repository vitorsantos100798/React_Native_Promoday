import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

export const NotPromotion = () => {
  const navigation: any = useNavigation();
  const navigatePromotion = () => {
    navigation.navigate('registerPromotion');
  };
  return (
    <>
      <View style={styles.containerDad}>
        <View style={styles.containerIntern}>
          <Image source={require('../../assets/iconNotPromotion.png')} />
          <Text style={styles.text}>Infelizmente, não há promoções</Text>
          <Text style={styles.text}>na sua localidade.</Text>
          <TouchableOpacity onPress={navigatePromotion} style={styles.button}>
            <Text style={styles.textButton}>Publique Agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
