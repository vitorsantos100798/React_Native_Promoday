import React, {forwardRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  ActivityIndicator,
  TextInput,
  FlatList,
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

import {CleanModal} from '../../components/Modal';
import {ScrollCity} from '../../components/ScrollCity';
import {getCities} from '../../services/getCities';
import {CitiesObj} from '../../types/cityObj.js';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const SignUp = forwardRef(({navigation}: NavigateScreenProps, ref) => {
  const [loading, setLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [cities, setCities] = useState<CitiesObj[]>();
  const [filteredCities, setFilteredCities] = useState<
    CitiesObj[] | undefined
  >();
  const [searchCity, setSearchCity] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      handlerGetCity();
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

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSearch = (text: string) => {
    setSearchCity(text);
    if (text === '') {
      setFilteredCities(cities);
    } else {
      const filtered = cities?.filter(city =>
        city.Nome.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredCities(filtered);
    }
  };

  const handlerGetCity = async () => {
    try {
      const response = await getCities();
      setCities(response);
      setFilteredCities(response);
    } catch (error) {
      console.error(error);
    }
  };

  const search = require('../../assets/search.png');

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
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
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
      <TouchableOpacity onPress={() => toggleModal()}>
        <InputLine
          value={formik.values.city}
          placeholder="Cidade"
          error={formik.errors.city}
          touched={formik.touched.city}
          editable={false}
        />
      </TouchableOpacity>

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

      <CleanModal height={'50%'} isVisible={modalVisible}>
        <TouchableOpacity onPress={toggleModal} style={styles.closeModal}>
          <Image source={require('../../assets/x.png')} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={styles.searchCity}
            placeholder="Pesquisar cidade"
            onChangeText={text => handleSearch(text)}
            value={searchCity}
          />
          <View style={styles.containerImage}>
            <Image style={styles.image} source={search} />
          </View>
        </View>

        <FlatList
          data={filteredCities}
          keyExtractor={item => item.Id.toString()}
          renderItem={({item}) => {
            return (
              <>
                <TouchableOpacity
                  style={styles.ButtonContainerList}
                  onPress={() => {
                    toggleModal(), formik.setFieldValue('city', item.Nome);
                  }}
                  activeOpacity={0.6}>
                  <ScrollCity City={item.Nome} />
                </TouchableOpacity>
              </>
            );
          }}
        />
      </CleanModal>

      <Toast ref={ref} />
    </KeyboardAvoidingView>
  );
});
