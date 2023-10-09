import React, {useEffect, useState} from 'react';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

import {styles} from './styles';
import {CleanModal} from '../../components/Modal';
import {ScrollCity} from '../../components/ScrollCity';
import {getCities} from '../../services/getCities';
import {CitiesObj} from '../../types/cityObj.js';

function Feed({navigation}: NavigateScreenProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Regente Feijo');
  const [cities, setCities] = useState<CitiesObj[]>();
  const [filteredCities, setFilteredCities] = useState<
    CitiesObj[] | undefined
  >();
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    handlerGetCity();
    setSearchCity('');
  }, [selectedCity]);

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
