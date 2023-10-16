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
import {getInfoUser} from '../../services/getInfoUser';
import Toast from 'react-native-toast-message';
import {typeInfoUser} from '../../types/typeInfoUser';
import {useAuth} from '../../hooks/useAuth';

const Profile = ({navigation}: NavigateScreenProps, ref: any) => {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState<string>();
  const [user, setUser] = useState<typeInfoUser[]>([]);

  const iconLocation = require('../../assets/maps.png');
  const {setIsAuthenticated} = useAuth();
  useEffect(() => {
    GetInfoUserData();
  }, []);

  const GetInfoUserData = async function fetchData() {
    setLoading(true);
    const getId = await getUserFromAsyncStorage();
    const infoUser = await getInfoUser(String(getId));

    if (infoUser) {
      setUser(infoUser);
      const userPhoto = infoUser[0].profileImage;
      if (userPhoto) {
        setPhoto(userPhoto);
      }
    }

    setLoading(false);
  };

  const getUserFromAsyncStorage = async () => {
    const userString = await AsyncStorage.getItem('user');
    if (userString) {
      formik.setFieldValue('id', userString);
      return userString;
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

  const navigateLogin = async () => {
    try {
      await AsyncStorage.clear();
      setIsAuthenticated(false);
      navigation.navigate('login');
    } catch (error) {
      console.error('Erro ao limpar o AsyncStorage:', error);
    }
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

      <View style={styles.location}>
        <Text style={styles.title}>{user.map(item => item.city)}</Text>
        <Image style={styles.image} source={iconLocation} />
      </View>
      <Text style={styles.emailTitle}>{user.map(item => item.email)}</Text>

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
