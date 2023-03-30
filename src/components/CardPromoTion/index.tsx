import React from 'react';
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
              <TouchableOpacity>
                <Image source={require('../../assets/card/Like.png')} />
              </TouchableOpacity>
              <Text style={styles.titleIcons}>Valida</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={require('../../assets/card/deslike.png')} />
              </TouchableOpacity>
              <Text style={styles.titleIcons}>Invalida</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={require('../../assets/card/acabou.png')} />
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
