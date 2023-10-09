import React, {useCallback, useState} from 'react';
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
import {registerPromotionService} from '../../services/registerPromotionService';
import {useFormik} from 'formik';

import {
  CameraOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

const RegisterPromotion = ({navigation}: NavigateScreenProps, ref: any) => {
  const [photo, setPhoto] = useState<string>();
  const [loading, setLoading] = useState(false);
  const photoDefault = require('../../assets/productphoto.png');

  const pickerImageCamera = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'back',
      includeBase64: true,
    };
    const camera = await launchCamera(options);

    if (camera?.assets && camera.assets.length > 0) {
      const image = camera.assets[0].uri;
      const photoDataBase64 = camera.assets[0].base64;

      setPhoto(image);
      formik.setFieldValue('imagePromotion', photoDataBase64);
    }
  };
  const initialValues = {
    imagePromotion: '',
    city: '',
    nameSupermarketing: '',
    nameProduct: '',
    price: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  const handlerSubmit = async () => {
    try {
      setLoading(true);
      formik.handleSubmit();
      const response = await registerPromotionService(formik.values);

      setLoading(true);
      if (response) {
        Toast.show({
          type: 'success',
          text1: response.promotion.message,
          visibilityTime: 3000,
          autoHide: true,
        });
        setTimeout(() => navigationoFeed(), 3000);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
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

  const navigationoFeed = () => {
    navigation.navigate('feed');
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableOpacity
        onPress={pickerImageCamera}
        style={styles.logoContainer}>
        <Image
          source={photo ? {uri: photo} : photoDefault}
          style={styles.logo}
        />
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          height: 380,
        }}>
        <Input
          placeholder="Cidade"
          onChangeText={value => formik.setFieldValue('city', value)}
        />
        <Input
          placeholder="Nome do Mercado"
          onChangeText={value =>
            formik.setFieldValue('nameSupermarketing', value)
          }
        />
        <Input
          placeholder="Produto"
          onChangeText={value => formik.setFieldValue('nameProduct', value)}
        />
        <Input
          placeholder="Preço"
          onChangeText={value => formik.setFieldValue('price', value)}
        />
      </View>
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
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        )}
      </View>
      <Toast ref={ref} />
    </KeyboardAvoidingView>
  );
};

export default RegisterPromotion;
