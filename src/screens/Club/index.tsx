import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Share,
} from 'react-native';
import AppBar from '../../components/AppBar';
import {ListCupons} from '../../mock/cupons';
import {styles} from './styles';

export const Club = () => {
  const handleShareCode = (
    code: any,
    supermercado: any,
    oferta: any,
    uriLoja: any,
  ) => {
    Share.share({
      message: `${oferta} em  ${supermercado}\n Copom: ${code}`,
      url: uriLoja,
    });
  };

  return (
    <>
      <View style={styles.containerHeader}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontFamily: 'Poppins-Regular',
          }}>
          Club de Descontos
        </Text>
        <Image
          style={{height: 22, width: 22, marginLeft: 10, marginBottom: 5}}
          source={require('../../assets/clubStamp.png')}
        />
      </View>
      <FlatList
        data={ListCupons}
        keyExtractor={item => item.codigo}
        renderItem={({item}) => {
          return (
            <>
              <View style={styles.container}>
                <View style={styles.containerCard}>
                  <View style={styles.containerImage}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={styles.stylesImage}
                    />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      marginTop: '10%',
                    }}>
                    <Text style={styles.text}>{item.nome}</Text>
                    <Text style={styles.text}>{item.loja}</Text>
                    <Text style={styles.textCode}>
                      <Text style={styles.text}>Codigo:</Text> {item.codigo}
                      <TouchableOpacity
                        onPress={() =>
                          handleShareCode(
                            item.codigo,
                            item.loja,
                            item.nome,
                            item.image,
                          )
                        }>
                        <Image
                          style={{
                            marginLeft: 10,
                            height: 18,
                            width: 18,
                            tintColor: '#0000007b',
                          }}
                          source={require('../../assets/IconShare.png')}
                        />
                      </TouchableOpacity>
                    </Text>
                  </View>
                </View>
              </View>
            </>
          );
        }}
      />
      <AppBar club={true} />
    </>
  );
};
