import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {useState} from 'react';
import styles from './styles';
import {TypeInputProps} from '../../types/TypeInputs';

export const Input = ({error, touched, ...props}: TypeInputProps) => {
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
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
