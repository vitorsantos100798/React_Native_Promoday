import React from 'react';
import {Image, View, Text, TouchableOpacity, BackHandler} from 'react-native';
import {styles} from './styles';
import {Input} from '../../components/input/input';
import {
  ParamListBase,
  RouteProp,
  useFocusEffect,
} from '@react-navigation/native';
type LoginScreenProps = {
  navigation: any;
  route: RouteProp<ParamListBase, 'login'>;
};
function Login({navigation}: LoginScreenProps) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Impede o usuário de voltar para a tela Splash
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
