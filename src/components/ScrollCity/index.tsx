import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

type CityProps = {
  City: any;
  onPress?: any;
};

export const ScrollCity = ({City, onPress}: CityProps) => {
  return (
    <View style={styles.containerInternal}>
      <Text style={styles.text}>{City}</Text>
    </View>
  );
};
