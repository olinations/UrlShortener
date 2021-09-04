import React, {FC} from 'react';
import {TextInput} from 'react-native';
import {shortenerStyles} from '../styles/styles';

interface Props {
  url: string;
  loading: boolean;
  handleInputChange: ((text: string) => void) | undefined;
}

const InputUrls: FC<Props> = ({url, loading, handleInputChange}) => {
  return (
    <TextInput
      style={shortenerStyles.textInput}
      value={url}
      editable={!loading}
      placeholder="Type URL: ex. google.com"
      autoCorrect={false}
      autoCapitalize="none"
      onChangeText={handleInputChange}
    />
  );
};

export default InputUrls;
