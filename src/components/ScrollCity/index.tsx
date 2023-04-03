import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

type CityProps = {
  City: string | undefined;
  State?: any;
};

export const ScrollCity = ({City, State}: CityProps) => {
  return (
    <View style={styles.containerInternal}>
      <Text style={styles.text}>{City}</Text>
    </View>
  );
};
