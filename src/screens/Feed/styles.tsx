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
});
