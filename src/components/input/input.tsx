import React from 'react';
import {View, TextInput, TextInputProps} from 'react-native';
import {useState} from 'react';
import styles from './styles';

export const Input = (props: TextInputProps) => {
  const [focused, setFocused] = useState(false);
  const handleFocused = () => {
    setFocused(true);
  };
  const handlerBlur = () => {
    setFocused(false);
  };

  return (
    <View>
      <TextInput
        style={focused ? styles.inputFocus : styles.input}
        onFocus={handleFocused}
        onBlur={handlerBlur}
        {...props}
      />
    </View>
  );
};
