import React from 'react';
import {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import AnimatedImage from '../../components/AnimationImage';

import styles from './styles';
function Splash({navigation}: any) {
  const splashimage = require('../../assets/splash.png');

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <AnimatedImage
        imageSource={splashimage}
        imageStyle={{width: 200, height: 200}}
      />
    </View>
  );
}

export default Splash;
