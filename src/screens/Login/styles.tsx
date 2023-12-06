import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  logo: {
    width: 200,
    height: 200,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: '5%',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: '#DB3026',
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  button: {
    backgroundColor: '#DB3026',
    height: 60,
    width: '80%',
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
  signupContainer: {
    alignItems: 'center',
    margin: '5%',
  },
  signupText: {
    fontFamily: 'Poppins-Bold',
    color: '#00000090',
  },
});

export default styles;
