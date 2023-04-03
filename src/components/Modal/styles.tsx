import {StyleSheet, ViewStyle} from 'react-native';

export const modalStyle = ({height}: {height: number | string}): ViewStyle => ({
  backgroundColor: '#fff',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 20,
  height: height,
  borderWidth: 1,
  borderColor: '#D3D3D3',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default styles;
