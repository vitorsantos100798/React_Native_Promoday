import React, {useState} from 'react';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {CardPromotion} from '../../components/CardPromoTion';
import AppBar from '../../components/AppBar';
import {styles} from './styles';
import {CleanModal} from '../../components/Modal';
import {FeedData} from '../../mock/feed';
import {City} from '../../mock/city';
import {ScrollCity} from '../../components/ScrollCity';

function Feed({navigation}: NavigateScreenProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const navigatePromotion = () => {
    navigation.navigate('registerPromotion');
  };
  const cart = require('../../assets/cart.png');
  const triangle = require('../../assets/triangle.png');
  const triangleOpen = require('../../assets/triangleOpen.png');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerFlex}>
          <TouchableOpacity onPress={toggleModal} style={styles.containerCity}>
            <Image style={{width: 24, height: 24}} source={cart} />
            <Text style={styles.title}>
              {selectedCity ? selectedCity : 'Presidente Prudente'}
            </Text>
            <Image
              style={{height: 16, width: 16, marginTop: 5}}
              source={modalVisible ? triangle : triangleOpen}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={FeedData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <CardPromotion
              nameProduct={item.nameProduct}
              price={item.price}
              nameSupermarketing={item.nameSupermarketing}
              iconSupermarketing={item.iconSupermarketing}
              imagePromotion={item.imagePromotion}
            />
          );
        }}
      />

      <View style={styles.containerBotao}>
        <TouchableOpacity onPress={navigatePromotion}>
          <Text style={styles.textDivulgue}>Teste de branch no botão</Text>
        </TouchableOpacity>
      </View>
      <AppBar feed={true} />
      <CleanModal height={'20%'} isVisible={modalVisible}>
        <TouchableOpacity onPress={toggleModal} style={styles.closeModal}>
          <Image source={require('../../assets/x.png')} />
        </TouchableOpacity>
        <FlatList
          data={City}
          keyExtractor={item => item.ID}
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
