import React from 'react';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {CardPromotion} from '../../components/CardPromoTion';
import {styles} from './styles';

function Feed({navigation, focused}: NavigateScreenProps) {
  const navigateProfile = () => {
    navigation.navigate('profile');
  };
  const navigatePromotion = () => {
    navigation.navigate('registerPromotion');
  };
  const navigateClub = () => {
    navigation.navigate('club');
  };

  const image = require('../../assets/profileFeed.png');
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
          <View
            style={{
              //  backgroundColor: 'pink',
              width: '80%',
              height: '100%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '20%',
                height: '100%',
                //  backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 33,
                  height: 33,
                }}
                source={require('../../assets/cart.png')}
              />
            </View>

            <View
              style={{
                width: '80%',
                height: '100%',
                //  backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  flex: 1,
                }}>
                <Text style={styles.title}>Presidente Prudente</Text>
                <Image
                  style={{marginTop: '3%'}}
                  source={require('../../assets/triangle.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: 'green',
              width: '20%',
              height: '100%',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity onPress={navigateProfile}>
              <Image
                source={require('../../assets/iconProfileTwo.png')}
                style={styles.setColorIcon}
              />
            </TouchableOpacity>
          </View>
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
      <View>
        <Image
          style={{
            width: 43,
            height: 43,
            resizeMode: 'contain',
            borderRadius: 100,
            backgroundColor: 'red',
            flex: 1,
          }}
          source={require('../../assets/sucessRegistration.png')}
        />
      </View>
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
      {/* <View
        style={{
          width: '100%',
          height: '7%',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/iconFeed.png')}
              style={styles.activeRoute}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Feed</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#0808086a',
            height: 35,
          }}></View>
        <View>
          <TouchableOpacity onPress={navigateClub}>
            <Image
              source={require('../../assets/iconClub.png')}
              style={styles.setColorIcon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Club</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#0808086a',
            height: 35,
          }}></View>
        <View>
          <TouchableOpacity onPress={navigateProfile}>
            <Image
              source={require('../../assets/iconProfileTwo.png')}
              style={styles.setColorIcon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Perfil</Text>
        </View>
      </View> */}
    </>
  );
}

export default Feed;
