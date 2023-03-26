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
      <View
        style={{
          width: '100%',
          height: '25%',
          // backgroundColor: 'blue',
          alignItems: 'center',
          marginTop: '20%',
        }}>
        <Image source={require('../../assets/splash.png')} />
      </View>
      <View
        style={{
          width: '100%',
          height: '5%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: '#DB3026',
            fontSize: 20,
          }}>
          Descontos incríveis para você!
        </Text>
      </View>
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <View
        style={{
          width: '100%',
          height: '20%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity activeOpacity={0.8} style={styles.containerButton}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: '5%',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            color: '#DB3026',
          }}>
          Crie uma conta grátis
        </Text>
      </View>
    </View>
  );
}

export default Login;
