import React from 'react';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './styles';

function Feed({navigation}: NavigateScreenProps) {
  const navigateProfile = () => {
    navigation.navigate('profile');
  };
  const image = require('../../assets/profileFeed.png');
  const cart = require('../../assets/cart.png');
  const triangle = require('../../assets/triangle.png');

  const products = [
    {
      id: '1',
      iconSupermarkt: '',
      imagePromotion: '',
      nameProduction: '',
      price: '',
    },
  ];
  const ProductItem = ({name, description, price}: any) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{`$${price}`}</Text>
    </View>
  );
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerFlex}>
          <View style={styles.logoContainer}>
            <TouchableOpacity onPress={navigateProfile}>
              <Image source={image} style={{marginRight: 10, marginTop: 25}} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerCity}>
            <Image source={cart} />
            <Text style={styles.title}>Presidente Prudente</Text>
            <TouchableOpacity>
              <Image source={triangle} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.containerCard}>
        <View style={styles.cardContainer}>
          <View style={styles.cardTitleContainer}>
            <View
              style={{
                width: '25%',
                height: '60%',
                marginLeft: '5%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/card/iconSupermarkt.png')}
                style={{flex: 1, width: '100%', borderRadius: 5}}
              />
            </View>
            <Text
              style={{
                marginLeft: '2%',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
              }}>
              Flesh Super Marketing
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: '60%',
            }}>
            <Image
              source={require('../../assets/card/imagePromotion.jpg')}
              style={{
                flex: 1,
                width: '100%',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: '10%',
              backgroundColor: '#DB3026',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                marginLeft: '35%',
                marginTop: '2%',
              }}>
              Laranja Lima
            </Text>
            <TouchableOpacity style={{marginLeft: '20%', marginTop: '2%'}}>
              <Image source={require('../../assets/card/iconWaze.png')} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#C6C6C6',
              borderTopWidth: 0,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <View
              style={{
                width: '80%',
                height: '100%',

                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View>
                <TouchableOpacity>
                  <Image source={require('../../assets/card/Like.png')} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Valida
                </Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Image source={require('../../assets/card/deslike.png')} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Invalida
                </Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Image source={require('../../assets/card/acabou.png')} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Acabou
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  color: '#DB3026',
                  fontSize: 16,
                }}>
                R$ 0,59
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default Feed;
