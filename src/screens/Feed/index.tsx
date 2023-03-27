import React from 'react';
import {NavigateScreenProps} from '../../types/NavigateScreenProps.ts';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

function Feed({navigation}: NavigateScreenProps) {
  const navigateProfile = () => {
    navigation.navigate('profile');
  };
  const image = require('../../assets/profileFeed.png');
  const cart = require('../../assets/cart.png');
  const triangle = require('../../assets/triangle.png');
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerFlex}>
          <View style={styles.logoContainer}>
            <TouchableOpacity onPress={navigateProfile}>
              <Image source={image} style={{marginRight: 10, marginTop: 5}} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={cart} />

            <Text style={styles.title}>Presidente Prudente</Text>
            <Image source={triangle} />
          </View>
        </View>
      </View>
    </>
  );
}

export default Feed;
