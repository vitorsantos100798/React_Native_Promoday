import {useFocusEffect} from '@react-navigation/native';
import React from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {InputLine} from '../../components/InputLine';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {styles} from './styles';

export function SignUp({navigation}: NavigateScreenProps) {
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
  const navigationSignUp = () => {
    navigation.navigate('login');
  };
  const navigationoSucess = () => {
    navigation.navigate('sucessRegistration');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/splash.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Criar Conta</Text>
      </View>
      <InputLine placeholder="Nome" />
      <InputLine placeholder="Email" />
      <InputLine placeholder="Cidade" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={navigationoSucess}
          activeOpacity={0.8}
          style={styles.button}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <TouchableOpacity onPress={navigationSignUp}>
          <Text style={styles.signupText}>
            Você tem uma conta ?{' '}
            <Text style={styles.signupTextIntern}>entrar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
