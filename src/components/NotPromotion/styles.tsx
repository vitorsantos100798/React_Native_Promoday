import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerDad: {
    width: '100%',
    height: '79%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerIntern: {
    width: '100%',
    height: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    color: '#333333',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#DB3026',
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  textButton: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    color: '#ffffff',
  },
});

export default styles;
