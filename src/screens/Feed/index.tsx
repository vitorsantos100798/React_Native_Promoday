import React from 'react';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {CardPromotion} from '../../components/CardPromoTion';
import AppBar from '../../components/AppBar';
import {styles} from './styles';

function Feed({navigation, focused}: NavigateScreenProps) {
  const navigatePromotion = () => {
    navigation.navigate('registerPromotion');
  };
  const cart = require('../../assets/cart.png');
  const triangle = require('../../assets/triangle.png');
  type testeData = {
    id: string;
    nameSupermarketing: string;
    price: string;
    nameProduct: string;
  }[];
  const data: testeData = [
    {
      id: '1',
      nameSupermarketing: 'Supermarket 1',
      price: '10.99',
      nameProduct: 'Milho Verde ',
    },
    {
      id: '2',
      nameSupermarketing: 'Supermarket 2',
      price: '9.99',
      nameProduct: 'Product 2',
    },
    {
      id: '3',
      nameSupermarketing: 'Supermarket 3',
      price: '8.99',
      nameProduct: 'Product 3',
    },
    {
      id: '4',
      nameSupermarketing: 'Supermarket 4',
      price: '7.99',
      nameProduct: 'Product 4',
    },
    {
      id: '5',
      nameSupermarketing: 'Supermarket 5',
      price: '6.99',
      nameProduct: 'Product 5',
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerFlex}>
          <TouchableOpacity style={styles.containerCity}>
            <Image style={{width: 28, height: 28}} source={cart} />
            <Text style={styles.title}>Presidente Prudente</Text>
            <Image source={triangle} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <CardPromotion
              nameProduct={item.nameProduct}
              price={item.price}
              nameSupermarketing={item.nameSupermarketing}
            />
          );
        }}
      />

      <View
        style={{
          width: '100%',
          height: '7%',
          backgroundColor: '#DB3026',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={navigatePromotion}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: 'white',
              fontSize: 14,
            }}>
            DIVULGUE UMA PROMOÇÃO
          </Text>
        </TouchableOpacity>
      </View>
      <AppBar feed={true} />
    </>
  );
}

export default Feed;
