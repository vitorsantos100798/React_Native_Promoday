import React from 'react';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  BackHandler,
} from 'react-native';
import {styles} from './styles';
import {Input} from '../../components/input/input';
import {useFocusEffect} from '@react-navigation/native';

function RegisterPromotion({navigation}: NavigateScreenProps) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.reset({
          index: 0,
          routes: [{name: 'login'}],
        });
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const navigationofSignUp = () => {
    navigation.navigate('signup');
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={require('../../assets/productphoto.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}>Cadastre uma Promoção</Text>
      </View> */}
      <Input placeholder="Local" />
      <Input placeholder="Nome do Produto" />
      <Input placeholder="Preço" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default RegisterPromotion;
