import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerCard: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '80%',
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
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
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
    //fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 18,
    color: '#333333',
    fontFamily: 'Poppins-SemiBold',
  },
  conatinerIconWaze: {
    width: 32,
    height: 32,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#35ccfe0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
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
    width: '60%',
    justifyContent: 'space-between',
  },
  defaultColor: {
    width: 24,
    height: 24,
    tintColor: '#000000',
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
    fontFamily: 'Poppins-SemiBold',
  },
  containerPrice: {},
  titlePrice: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    color: '#DB3026',
  },
});

export default styles;
