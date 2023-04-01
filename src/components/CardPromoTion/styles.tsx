import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardContainer: {
    width: '70%',
    height: '60%',
    marginTop: '5%',
  },
  cardTitleContainer: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerImage: {
    width: '25%',
    height: 35,
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleNameSupermarkt: {
    marginLeft: '2%',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  containerImagePromotion: {
    width: '100%',
    height: 300,
  },
  imagePromotion: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  containerProductRange: {
    width: '100%',
    height: 50,
    backgroundColor: '#DB3026',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRangeProduct: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  conatinerIconWaze: {
    marginLeft: 20,
  },
  containerIcons: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#C6C6C6',
  },
  containerDadIcons: {
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleIcons: {
    fontFamily: 'Poppins-Regular',
  },
  containerPrice: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlePrice: {
    fontFamily: 'Poppins-Bold',
    color: '#DB3026',
    fontSize: 16,
  },
  iconSupermarketing: {
    flex: 1,
    width: '100%',
    borderRadius: 5,
  },
});
export default styles;
