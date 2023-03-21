import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <Text>hellou word</Text>
      </View>
    </>
  );
};

export default App;
