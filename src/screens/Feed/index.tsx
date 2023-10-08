import React, {useEffect, useState} from 'react';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {CardPromotion} from '../../components/CardPromoTion';
import AppBar from '../../components/AppBar';
import {styles} from './styles';
import {CleanModal} from '../../components/Modal';
import {FeedData} from '../../mock/feed';
import {City} from '../../mock/city';
import {ScrollCity} from '../../components/ScrollCity';
import {NotPromotion} from '../../components/NotPromotion';
import {getCities} from '../../services/getCities';
import {CitiesObj} from '../../types/cityObj.js';
import {getPromotionByCity} from '../../services/getPromotionByCity';

import {typeCardPromotion} from '../../types/typeCardPromotion';

function Feed({navigation}: NavigateScreenProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Regente Feijo');
  const [cities, setCities] = useState<CitiesObj[]>();
  const [filteredCities, setFilteredCities] = useState<
    CitiesObj[] | undefined
  >();
  const [searchCity, setSearchCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [promotion, Setpromotion] = useState<typeCardPromotion[]>([]);
  const [noPromotion, setNoPromotion] = useState(false);

  useEffect(() => {
    handlerGetCity();
    setSearchCity('');
    handlerPromotion();
  }, [selectedCity]);
  console.log(selectedCity);
  const handlerPromotion = async () => {
    setLoading(true);

    try {
      const response = await getPromotionByCity(selectedCity);

      if (Object.keys(response).length === 0) {
        setNoPromotion(true);
        Setpromotion([]);
      } else {
        setNoPromotion(false);
        Setpromotion(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const navigatePromotion = () => {
    navigation.navigate('registerPromotion');
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

  const cart = require('../../assets/cart.png');
  const triangle = require('../../assets/triangle.png');
  const triangleOpen = require('../../assets/triangleOpen.png');
  const search = require('../../assets/search.png');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerFlex}>
          <TouchableOpacity onPress={toggleModal} style={styles.containerCity}>
            <Image style={{width: 24, height: 24}} source={cart} />
            <Text style={styles.title}>{selectedCity}</Text>
            <Image
              style={{height: 16, width: 16, marginTop: 5}}
              source={modalVisible ? triangle : triangleOpen}
            />
          </TouchableOpacity>
        </View>
      </View>

      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#DB3026" />
        </View>
      ) : noPromotion ? (
        <NotPromotion />
      ) : (
        <FlatList
          data={promotion}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <CardPromotion
                nameProduct={item.product}
                price={item.price}
                nameSupermarketing={item.establishment}
                iconSupermarketing={item.iconSupermarketing}
                imagePromotion={item.promotion_image}
                locationSupermarket={`${selectedCity}`}
                city={selectedCity}
              />
            );
          }}
        />
      )}

      <View style={styles.containerBotao}>
        <TouchableOpacity onPress={navigatePromotion}>
          <Text style={styles.textDivulgue}>DIVULGUE UMA PROMOÇÃO</Text>
        </TouchableOpacity>
      </View>
      <AppBar feed={true} />
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
                    toggleModal(), setSelectedCity(item.Nome);
                  }}
                  activeOpacity={0.6}>
                  <ScrollCity City={item.Nome} />
                </TouchableOpacity>
              </>
            );
          }}
        />
      </CleanModal>
    </>
  );
}

export default Feed;
