import React, {forwardRef} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  ActivityIndicator,
} from 'react-native';
import {InputLine} from '../../components/InputLine';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {styles} from './styles';
import {useFormik} from 'formik';
import {useFocusEffect} from '@react-navigation/native';
import {serviceCreateUser} from '../../services/serviceCreateUser';
import {typeError} from '../../types/typeError';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';

export const SignUp = forwardRef(({navigation}: NavigateScreenProps, ref) => {
  const [loading, setLoading] = React.useState(false);

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

  const validationSchema = Yup.object({
    city: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .required('Campo obrigatório'),
  });

  const formik = useFormik({
    initialValues: {
      city: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        setLoading(true);

        await validationSchema.validate(values);

        const response = await serviceCreateUser(values);

        if (response.error) {
          Toast.show({
            type: 'error',
            text1: 'Usuário já Cadastrado',
            visibilityTime: 3000,
            autoHide: true,
          });
        } else {
          navigationoSucess();
        }
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    },
  });
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
      <InputLine
        value={formik.values.email}
        onChangeText={value => formik.setFieldValue('email', value)}
        placeholder="E-mail"
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      <InputLine
        value={formik.values.password}
        onChangeText={value => formik.setFieldValue('password', value)}
        placeholder="Senha"
        secureTextEntry
        error={formik.errors.password}
        touched={formik.touched.password}
      />
      <InputLine
        value={formik.values.city}
        onChangeText={value => formik.setFieldValue('city', value)}
        placeholder="Cidade"
        error={formik.errors.city}
        touched={formik.touched.city}
      />

      {loading ? (
        <View>
          <ActivityIndicator size="large" color="#FF0000" />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={formik.handleSubmit}
            activeOpacity={0.8}
            style={styles.button}>
            <Text style={styles.buttonText}>Criar</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.signupContainer}>
        <TouchableOpacity onPress={navigationSignUp}>
          <Text style={styles.signupText}>
            Você tem uma conta?{' '}
            <Text style={styles.signupTextIntern}>entrar</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <Toast ref={ref} />
    </KeyboardAvoidingView>
  );
});
