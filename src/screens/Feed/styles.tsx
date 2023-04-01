import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DB3026',
    width: '100%',
    height: '8%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  setColorIcon: {
    tintColor: 'white',
    marginTop: 3,
    width: 40,
    height: 40,
  },
  activeRoute: {
    tintColor: '#DB3026',
    marginTop: 3,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    color: '#000000b6',
    fontSize: 14,
    marginTop: 2,
  },
  logoContainer: {
    width: '100%',
    height: '35%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  containerFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB3026',
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
    width: '70%',
    backgroundColor: 'blue',
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
