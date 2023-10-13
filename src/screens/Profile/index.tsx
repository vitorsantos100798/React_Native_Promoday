import React, {useEffect, useState} from 'react';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {useFormik} from 'formik';
import {CameraOptions, launchCamera} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {photoProfileService} from '../../services/photoProfile';
import Toast from 'react-native-toast-message';

const Profile = ({navigation}: NavigateScreenProps, ref: any) => {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState<string>();

  useEffect(() => {
    getUserFromAsyncStorage();
  }, []);

  const getUserFromAsyncStorage = async () => {
    const userString = await AsyncStorage.getItem('user');
    if (userString) {
      formik.setFieldValue('id', userString);
    } else {
      console.error('Erro ao recuperar o valor do usuário do AsyncStorage:');
    }
  };

  const photoDefault = require('../../assets/iconProfile.png');

  const handlerProfileImage = async () => {
    setLoading(true);

    const response = await photoProfileService(formik.values);

    if (response) {
      setPhoto(response);
      setLoading(false);
    }

    if (Object.keys(response).length === 1) {
      Toast.show({
        type: 'error',
        text1: String(response.error),
        visibilityTime: 3000,
        autoHide: true,
      });
      setPhoto('');
      setLoading(false);
    }
  };

  const pickerImageCamera = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'back',
      includeBase64: true,
    };
    const camera = await launchCamera(options);

    if (camera?.assets && camera.assets.length > 0) {
      const photoDataBase64 = camera.assets[0].base64;

      formik.setFieldValue('imageProfile', photoDataBase64);
      handlerProfileImage();
    }
  };

  const initialValues = {
    id: '',
    imageProfile: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  const navigateLogin = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickerImageCamera}>
        {loading ? (
          <View style={styles.logo}>
            <ActivityIndicator size="large" color="#FF0000" />
          </View>
        ) : (
          <Image
            source={photo ? {uri: photo} : photoDefault}
            style={styles.logo}
          />
        )}
      </TouchableOpacity>

      {/* <Text style={styles.title}>Vitor Santos</Text> */}
      <Text style={styles.emailTitle}>vitorinacio@gmail.com</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={navigateLogin}
          activeOpacity={0.8}
          style={styles.button}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <Toast ref={ref} />
    </View>
  );
};
export default Profile;
