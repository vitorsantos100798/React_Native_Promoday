import React from 'react';
import {Text, View} from 'react-native';
import AppBar from '../../components/AppBar';
export const Club = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '100%',
            height: '93%',
            //  backgroundColor: 'pink',
          }}></View>

        <AppBar club={true} />
      </View>
    </>
  );
};
