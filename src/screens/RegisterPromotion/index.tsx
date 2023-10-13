import React, {useCallback, useEffect, useState} from 'react';
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
  TextInput,
  FlatList,
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

import {CitiesObj} from '../../types/cityObj';
import {getCities} from '../../services/getCities';
import {CleanModal} from '../../components/Modal/index';
import {ScrollCity} from '../../components/ScrollCity/index';

const RegisterPromotion = ({navigation}: NavigateScreenProps, ref: any) => {
  const [photo, setPhoto] = useState<string>();
  const [loading, setLoading] = useState(false);
  const photoDefault = require('../../assets/productphoto.png');

  const [modalVisible, setModalVisible] = useState(false);
  const [cities, setCities] = useState<CitiesObj[]>();
  const [filteredCities, setFilteredCities] = useState<
    CitiesObj[] | undefined
  >();
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    handlerGetCity();
  }, []);

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
        <TouchableOpacity onPress={() => toggleModal()}>
          <Input
            value={formik.values.city}
            placeholder="Cidade"
            editable={false}
          />
        </TouchableOpacity>
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
};

export default RegisterPromotion;
