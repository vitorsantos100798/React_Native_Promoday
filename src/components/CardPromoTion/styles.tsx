import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerCard: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cardContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  containerImage: {
    width: 32,
    height: 32,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 8,
  },
  iconSupermarketing: {
    width: '100%',
    height: '100%',
  },
  titleNameSupermarkt: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#333333',
  },
  containerImagePromotion: {
    height: 200,
    width: '100%',
    overflow: 'hidden',
  },
  imagePromotion: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  containerProductRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  textRangeProduct: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#333333',
  },
  conatinerIconWaze: {
    width: 32,
    height: 32,
    borderRadius: 50,
    overflow: 'hidden',
  },
  containerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  containerDadIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultColor: {
    width: 24,
    height: 24,
    tintColor: '#c4c4c4',
    marginRight: 8,
  },
  activeColor: {
    width: 24,
    height: 24,
    tintColor: '#DB3026',
    marginRight: 8,
  },
  titleIcons: {
    fontSize: 12,
    lineHeight: 16,
    color: '#828282',
  },
  containerPrice: {},
  titlePrice: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#333333',
  },
});

export default styles;
