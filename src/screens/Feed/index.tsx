import React, {useState} from 'react';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {CardPromotion} from '../../components/CardPromoTion';
import AppBar from '../../components/AppBar';
import {styles} from './styles';
import {CleanModal} from '../../components/Modal';
import {FeedData} from '../../mock/feed';

function Feed({navigation}: NavigateScreenProps) {
  const [modalVisible, setModalVisible] = useState(false);

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
            <Text style={styles.title}>Presidente Prudente</Text>
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
          <Text style={styles.textDivulgue}>DIVULGUE UMA PROMOÇÃO</Text>
        </TouchableOpacity>
      </View>
      <AppBar feed={true} />
      <CleanModal height={'30%'} isVisible={modalVisible}>
        <TouchableOpacity onPress={toggleModal} style={styles.closeModal}>
          <Image source={require('../../assets/x.png')} />
        </TouchableOpacity>
      </CleanModal>
    </>
  );
}

export default Feed;
