import {TextInputProps} from 'react-native';

export type TypeInputProps = TextInputProps & {
  error?: string;
  touched?: boolean;
};
