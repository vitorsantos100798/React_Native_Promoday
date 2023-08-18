import React, {useState} from 'react';
import {View, TextInput, TextInputProps, Text} from 'react-native';
import styles from './styles';

interface InputLineProps extends TextInputProps {
  error?: string;
  touched?: boolean;
}

export const InputLine = ({error, touched, ...props}: InputLineProps) => {
  const [focused, setFocused] = useState(false);

  const handleFocused = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <View>
      <TextInput
        style={focused ? styles.inputFocus : styles.input}
        onFocus={handleFocused}
        onBlur={handleBlur}
        {...props}
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
