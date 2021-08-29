import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useShortened} from '../state/store';

const ShortenedUrl = ({url, index}) => {
  const {dispatch} = useShortened();

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text>{url}</Text>
      <TouchableOpacity
        onPress={() => {
          console.log(index);
          dispatch({type: 'REMOVEURL', payload: index});
        }}>
        <Text>DEL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShortenedUrl;
