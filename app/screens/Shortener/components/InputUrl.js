import React from 'react';
import {TextInput} from 'react-native';
import {shortenerStyles} from '../styles/styles';

const InputUrls = ({url, loading, handleInputChange}) => {
  return (
    <TextInput
      style={shortenerStyles.textInput}
      value={url}
      editable={!loading}
      placeholder="Type URL: ex. google.com"
      autoCorrect={false}
      autoCapitalize="none"
      onChangeText={text => handleInputChange(text)}
    />
  );
};

export default InputUrls;
