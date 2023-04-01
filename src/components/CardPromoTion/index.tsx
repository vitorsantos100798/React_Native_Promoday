import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  nameSupermarketing: string;
  price: string;
  nameProduct: string;
  imagePromotion: string | undefined;
  iconSupermarketing: string | undefined;
};
export const CardPromotion = ({
  nameSupermarketing,
  price,
  nameProduct,
  imagePromotion,
  iconSupermarketing,
}: Props) => {
  const [colorDeslike, setColorDeslike] = useState(false);
  const [colorLike, setColorLike] = useState(false);
  const [colorAcabou, setColorAcabou] = useState(false);

  const setColorIconLike = () => {
    setColorLike(!colorLike);
  };
  const setColorIconDesLike = () => {
    setColorDeslike(!colorDeslike);
  };
  const setColorIconAcabou = () => {
    setColorAcabou(!colorAcabou);
  };
  return (
    <View style={styles.containerCard}>
      <View style={styles.cardContainer}>
        <View style={styles.cardTitleContainer}>
          <View style={styles.containerImage}>
            <Image
              source={{
                uri: iconSupermarketing,
              }}
              style={styles.iconSupermarketing}
            />
          </View>
          <Text style={styles.titleNameSupermarkt}>{nameSupermarketing}</Text>
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
          <TouchableOpacity style={styles.conatinerIconWaze}>
            <Image
              style={{tintColor: '#ffffff'}}
              source={require('../../assets/card/iconWaze.png')}
            />
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
          <View style={styles.containerPrice}>
            <Text style={styles.titlePrice}>R$ {price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
