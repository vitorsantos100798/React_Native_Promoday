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
    fontFamily: 'Poppins-Medium',
    color: '#DB3026',
    fontSize: 20,
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
