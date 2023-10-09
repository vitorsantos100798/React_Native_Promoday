import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    marginTop: 40,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: '#DB3026',
    fontSize: 20,
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
  signupContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    fontFamily: 'Poppins-Bold',
    color: '#00000090',
  },
  signupTextIntern: {
    color: '#DB3026',
  },
  toast: {
    marginTop: 30,
  },
  closeModal: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
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
  containerImage: {
    height: 41,
    width: 30,
    borderBottomWidth: 1,
    borderColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonContainerList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 18,
    width: 18,
    tintColor: '#DB3026',
  },
});
