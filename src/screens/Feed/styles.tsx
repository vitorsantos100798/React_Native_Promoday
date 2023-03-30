import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DB3026',
    width: '100%',
    height: '10%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  logoContainer: {
    width: '100%',
    height: '35%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  containerFlex: {
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 20,
    marginRight: 15,
    marginLeft: 15,
  },
  containerCity: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ////
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
