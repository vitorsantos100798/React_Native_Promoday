import React, {useState} from 'react';
import {Modal, View} from 'react-native';
import styles, {modalStyle} from './styles';
type ModalType = {
  isVisible: boolean;
  children: React.ReactNode;
  height?: number | string;
};

export const CleanModal = ({isVisible, children, height}: ModalType) => {
  const [modalHeight, setModalHeight] = useState(0);

  const handleLayout = (event: any) => {
    const {height} = event.nativeEvent.layout;
    setModalHeight(height);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={[styles.container, {height: modalHeight / 2}]}>
        <View
          style={modalStyle({height: height! ?? 200})}
          onLayout={handleLayout}>
          {children}
        </View>
      </View>
    </Modal>
  );
};
