import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  nameSupermarketing: string;
  price: string;
  nameProduct: string;
};
export const CardPromotion = ({
  nameSupermarketing,
  price,
  nameProduct,
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
                uri: 'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2f2011%2f09%2f26%2f14%2fWDL-Logo-7184_6769_041335667_259168100.jpg',
              }}
              style={styles.iconSupermarketing}
            />
          </View>
          <Text style={styles.titleNameSupermarkt}>{nameSupermarketing}</Text>
        </View>
        <View style={styles.containerImagePromotion}>
          <Image
            source={require('../../assets/card/imagePromotion.jpg')}
            style={styles.imagePromotion}
          />
        </View>
        <View style={styles.containerProductRange}>
          <Text style={styles.textRangeProduct}>{nameProduct}</Text>
          <TouchableOpacity style={styles.conatinerIconWaze}>
            <Image source={require('../../assets/card/iconWaze.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerIcons}>
          <View style={styles.containerDadIcons}>
            <View>
              <TouchableOpacity onPress={setColorIconLike}>
                <Image
                  style={colorLike ? styles.activeColor : styles.defaultColor}
                  source={require('../../assets/card/Like.png')}
                />
              </TouchableOpacity>
              <Text style={styles.titleIcons}>Valida</Text>
            </View>
            <View>
              <TouchableOpacity onPress={setColorIconDesLike}>
                <Image
                  style={
                    colorDeslike ? styles.activeColor : styles.defaultColor
                  }
                  source={require('../../assets/card/deslike.png')}
                />
              </TouchableOpacity>
              <Text style={styles.titleIcons}>Invalida</Text>
            </View>
            <View>
              <TouchableOpacity onPress={setColorIconAcabou}>
                <Image
                  style={colorAcabou ? styles.activeColor : styles.defaultColor}
                  source={require('../../assets/card/acabou.png')}
                />
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
