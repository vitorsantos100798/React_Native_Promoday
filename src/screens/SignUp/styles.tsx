import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    aspectRatio: 1,
    maxWidth: '100%',
  },
  titleContainer: {
    marginTop: '5%',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: '#DB3026',
    fontSize: 20,
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
    display: 'flex',
    alignItems: 'center',
    margin: 15,
  },
  signupText: {
    fontFamily: 'Poppins-Bold',
    color: '#00000090',
  },
  signupTextIntern: {
    color: '#DB3026',
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
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});
