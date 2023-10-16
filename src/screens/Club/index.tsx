import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Share,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {getCupons} from '../../services/getCupons';
import {Cupon} from '../../types/Cupon';

export const Club = () => {
  const [cupons, setCupons] = useState<Cupon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCupons = async () => {
      try {
        const cuponsData = await getCupons();

        const convertedCupons: Cupon[] = cuponsData.map((item: any) => ({
          codigo: item.codigo,
          nome: item.nome,
          loja: item.loja,
          image: item.image,
        }));
        setCupons(convertedCupons);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar cupons:', error);
        setLoading(false);
      }
    };

    fetchCupons();
  }, []);

  const handleShareCode = (
    code: string,
    supermercado: string,
    oferta: string,
    uriLoja: string,
  ) => {
    Share.share({
      message: `${oferta} em ${supermercado}\n Código: ${code}`,
      url: uriLoja,
    });
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#DB3026" />
      </View>
    );
  }

  return (
    <>
      <View style={styles.containerHeader}>
        <Text
          style={{color: 'white', fontSize: 18, fontFamily: 'Poppins-Regular'}}>
          Club de Descontos
        </Text>
        <Image
          style={{height: 22, width: 22, marginLeft: 10, marginBottom: 5}}
          source={require('../../assets/clubStamp.png')}
        />
      </View>
      <FlatList
        data={cupons}
        keyExtractor={item => item.codigo}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <View style={styles.containerCard}>
                <View style={styles.containerImage}>
                  <Image
                    source={{uri: item.image}}
                    style={styles.stylesImage}
                  />
                </View>
                <View style={{width: '100%', height: '100%', marginTop: '10%'}}>
                  <Text style={styles.text}>{item.nome}</Text>
                  <Text style={styles.text}>{item.loja}</Text>
                  <Text style={styles.textCode}>
                    <Text style={styles.text}>Código:</Text> {item.codigo}
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
          );
        }}
      />
    </>
  );
};
