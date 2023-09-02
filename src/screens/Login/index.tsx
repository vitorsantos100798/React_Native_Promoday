import React, {useState} from 'react';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  BackHandler,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {Input} from '../../components/input/input';
import {useFocusEffect} from '@react-navigation/native';
import {useAuth} from '../../hooks/useAuth';
import {useFormik} from 'formik';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';

function Login({navigation}: NavigateScreenProps, ref: any) {
  const [loading, setLoading] = useState(false);
  const {SignIn} = useAuth();

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
  const validationSchema = Yup.object({
    city: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .required('Campo obrigatório'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: () => {},
  });

  const handlerSubmit = async () => {
    setLoading(true);
    formik.handleSubmit();

    const response = await SignIn(formik.values);

    setLoading(false);

    if (response.success) {
      navigationoFeed();
    }
    if (response.error) {
      Toast.show({
        type: 'error',
        text1: response.error,
        visibilityTime: 3000,
        autoHide: true,
      });
    }
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
      <Input
        value={formik.values.email}
        onChangeText={value => formik.setFieldValue('email', value)}
        placeholder="E-mail"
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      <Input
        value={formik.values.password}
        onChangeText={value => formik.setFieldValue('password', value)}
        placeholder="Senha"
        secureTextEntry
        error={formik.errors.password}
        touched={formik.touched.password}
      />

      <View style={styles.buttonContainer}>
        {loading ? (
          <View>
            <ActivityIndicator size="large" color="#FF0000" />
          </View>
        ) : (
          <TouchableOpacity
            onPress={handlerSubmit}
            activeOpacity={0.8}
            style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.signupContainer}>
        <TouchableOpacity onPress={navigationofSignUp}>
          <Text style={styles.signupText}>Crie uma conta grátis</Text>
        </TouchableOpacity>
      </View>
      <Toast ref={ref} />
    </KeyboardAvoidingView>
  );
}

export default Login;
