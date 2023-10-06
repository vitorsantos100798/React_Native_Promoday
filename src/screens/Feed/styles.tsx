import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DB3026',
    width: '100%',
    height: '7%',
    // borderBottomRightRadius: 15,
    // borderBottomLeftRadius: 15,
  },
  ButtonContainerList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
    height: '35%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textDivulgue: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    fontSize: 14,
  },
  containerBotao: {
    width: '100%',
    height: '7%',
    backgroundColor: '#DB3026',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFlex: {
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 18,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 5,
  },
  containerCity: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeModal: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  searchCity: {
    width: '68%',
    height: 50,
    marginTop: 10,
    marginLeft: 40,
    marginBottom: 20,
    fontFamily: 'Poppins-SemiBold',
    borderBottomWidth: 1.3,
    color: '#666',
    borderColor: '#DB3026',
  },
  image: {
    height: 18,
    width: 18,
    tintColor: '#DB3026',
  },
  containerImage: {
    height: 41,
    width: 30,
    borderBottomWidth: 1,
    borderColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
