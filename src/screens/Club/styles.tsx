import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  containerCard: {
    width: '100%',
    height: '20%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    flexDirection: 'row',
  },
  containerImage: {
    width: 92,
    height: 82,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 8,
    marginTop: '8%',
    marginLeft: '5%',
  },
  containerHeader: {
    backgroundColor: '#DB3026',
    width: '100%',
    height: '7%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  stylesImage: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    //letterSpacing: 1,
  },
  textCode: {
    color: 'red',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});
