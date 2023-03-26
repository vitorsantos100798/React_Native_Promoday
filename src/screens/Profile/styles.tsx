import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#DB3026',
    fontSize: 20,
    marginTop: 20,
  },
  emailTitle: {
    fontFamily: 'Poppins-Light',
    color: '#000000',
    fontSize: 16,
    marginTop: 10,
  },
  margin: {
    marginRight: '10%',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#DB3026',
    height: 60,
    width: 246,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    letterSpacing: 1,
  },
});

export default styles;
