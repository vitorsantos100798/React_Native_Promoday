import React, {useState} from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import styles from './styles';
type ModalType = {
  isVisible: boolean;
  children: React.ReactNode;
  height?: string | number;
};
export const ModalComponent = ({isVisible, children, height}: ModalType) => {
  const [modalHeight, setModalHeight] = useState(0);

  const handleLayout = (event: any) => {
    const {height} = event.nativeEvent.layout;
    setModalHeight(height);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={[styles.container, {height: modalHeight / 2}]}>
        <View
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
            height: height,
            borderWidth: 1,
            borderColor: '#D3D3D3',
          }}
          onLayout={handleLayout}>
          {children}
        </View>
      </View>
    </Modal>
  );
};
