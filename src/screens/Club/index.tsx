import React from 'react';
import {Text, View} from 'react-native';
import AppBar from '../../components/AppBar';
export const Club = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          //backgroundColor: 'blue',
          justifyContent: 'flex-end',
        }}>
        <AppBar club={true} />
      </View>
    </>
  );
};
