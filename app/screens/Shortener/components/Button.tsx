import React, {FC} from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {shortenerStyles} from '../styles/styles';

interface Props {
  shortenUrl: () => void;
  loading: boolean;
}

const Button: FC<Props> = ({shortenUrl, loading}) => {
  return (
    <TouchableOpacity style={shortenerStyles.button} onPress={shortenUrl}>
      {loading ? (
        <ActivityIndicator color={'#fff'} size={'small'} />
      ) : (
        <Text style={shortenerStyles.buttonText}>Submit</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
