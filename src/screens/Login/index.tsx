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

function Login({navigation}: NavigateScreenProps) {
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
  const navigationoFeed = () => {
    navigation.navigate('feed');
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
        <Text style={styles.title}>Descontos incríveis para você!</Text>
      </View>
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={navigationoFeed}
          activeOpacity={0.8}
          style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <TouchableOpacity onPress={navigationofSignUp}>
          <Text style={styles.signupText}>Crie uma conta grátis</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;
