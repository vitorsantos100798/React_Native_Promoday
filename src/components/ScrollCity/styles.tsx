import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
  },

  containerInternal: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginTop: 5,
    overflow: 'hidden',
    shadowColor: '#D3D3D3',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    width: '80%',
    elevation: 0.1,
  },
});

export default styles;
