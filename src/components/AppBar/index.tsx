import React from 'react';
import {useNavigation, CommonActions} from '@react-navigation/native'; // Importe CommonActions
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

function AppBar({feed, club}: any) {
  const navigation = useNavigation();

  const navigateFeed = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'feed'}],
      }),
    );
  };

  const navigateClub = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'club'}],
      }),
    );
  };

  const navigateProfile = () => {
    navigation.navigate('profile');
  };

  return (
    <View
      style={{
        width: '100%',
        height: '7%',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#D3D3D3',
        padding: 16,
      }}>
      <View>
        <TouchableOpacity onPress={navigateFeed}>
          <Image
            style={feed ? styles.activeRoute : styles.defaultRoute}
            source={require('../../assets/iconFeed.png')}
          />
        </TouchableOpacity>
        <Text>Feed</Text>
      </View>
      <View>
        <TouchableOpacity onPress={navigateClub}>
          <Image
            style={club ? styles.activeRoute : styles.defaultRoute}
            source={require('../../assets/iconClub.png')}
          />
        </TouchableOpacity>
        <Text>Club</Text>
      </View>
      <View>
        <TouchableOpacity onPress={navigateProfile}>
          <Image source={require('../../assets/iconProfileTwo.png')} />
        </TouchableOpacity>
        <Text>Perfil</Text>
      </View>
    </View>
  );
}

export default AppBar;
