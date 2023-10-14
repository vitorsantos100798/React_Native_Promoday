import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './styles';

type TypeCardPromotion = {
  nameSupermarketing: string;
  price: string;
  nameProduct: string;
  imagePromotion: string | undefined;
  iconSupermarketing: string | undefined;
  locationSupermarket: string;
  city: string;
  createdAt: string;
};
export const CardPromotion = ({
  nameSupermarketing,
  price,
  nameProduct,
  imagePromotion,
  iconSupermarketing,
  locationSupermarket,
  city,
  createdAt,
}: TypeCardPromotion) => {
  const [colorDeslike, setColorDeslike] = useState(false);
  const [colorLike, setColorLike] = useState(false);
  const [colorAcabou, setColorAcabou] = useState(false);

  const [counterValid, setCounterValid] = useState(0);
  const [counterInvalid, setCounterInvalid] = useState(0);
  const [counterFinished, setCounterFinished] = useState(0);
  const setColorIconLike = () => {
    if (colorLike) {
      setColorLike(false);
      setCounterValid(counterValid - 1);
    } else {
      setColorLike(true);
      setColorDeslike(false);
      setColorAcabou(false);
      setCounterValid(counterValid + 1);
      setCounterInvalid(0);
      setCounterFinished(0);
    }
  };

  const setColorIconDesLike = () => {
    if (colorDeslike) {
      setColorDeslike(false);
      setCounterInvalid(counterInvalid - 1);
    } else {
      setColorDeslike(true);
      setColorLike(false);
      setColorAcabou(false);
      setCounterInvalid(counterInvalid + 1);
      setCounterValid(0);
      setCounterFinished(0);
    }
  };

  const setColorIconAcabou = () => {
    if (colorAcabou) {
      setColorAcabou(false);
      setCounterFinished(counterFinished - 1);
    } else {
      setColorAcabou(true);
      setColorLike(false);
      setColorDeslike(false);
      setCounterFinished(counterFinished + 1);
      setCounterValid(0);
      setCounterInvalid(0);
    }
  };
  const handleOpenMaps = () => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=Supermercado${locationSupermarket}+em+${city}`,
    );
  };
  return (
    <View style={styles.containerCard}>
      <View style={styles.cardContainer}>
        <View style={styles.cardTitleContainer}>
          <View style={styles.containerImage}>
            <Image
              source={{
                uri: iconSupermarketing
                  ? iconSupermarketing
                  : 'https://travelpedia.com.br/wp-content/uploads/2018/01/supermercado-icon.jpg',
              }}
              style={styles.iconSupermarketing}
            />
          </View>
          <Text style={styles.titleNameSupermarkt}>
            Supermercado {nameSupermarketing}
          </Text>
        </View>
        <View style={styles.containerImagePromotion}>
          <Image
            source={{
              uri: imagePromotion,
            }}
            style={styles.imagePromotion}
          />
        </View>
        <View style={styles.containerProductRange}>
          <Text style={styles.textRangeProduct}>{nameProduct}</Text>
          <TouchableOpacity
            onPress={handleOpenMaps}
            style={styles.conatinerIconWaze}>
            <Image source={require('../../assets/maps.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerIcons}>
          <View style={styles.containerDadIcons}>
            <View>
              <TouchableOpacity onPress={setColorIconLike}>
                <View style={styles.iconContainer}>
                  <Image
                    style={colorLike ? styles.activeColor : styles.defaultColor}
                    source={require('../../assets/card/Like.png')}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.titleIcons}>Valida</Text>
            </View>

            <View>
              <TouchableOpacity onPress={setColorIconDesLike}>
                <View style={styles.iconContainer}>
                  <Image
                    style={
                      colorDeslike ? styles.activeColor : styles.defaultColor
                    }
                    source={require('../../assets/card/deslike.png')}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.titleIcons}>Invalida</Text>
            </View>

            <View>
              <TouchableOpacity onPress={setColorIconAcabou}>
                <View style={styles.iconContainer}>
                  <Image
                    style={
                      colorAcabou ? styles.activeColor : styles.defaultColor
                    }
                    source={require('../../assets/card/acabou.png')}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.titleIcons}>Acabou</Text>
            </View>
          </View>
          <View>
            <Text style={styles.titlePrice}>R$ {price}</Text>
            <Text style={styles.data}>{createdAt}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
