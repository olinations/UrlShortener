import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {removeUrl} from '../../../state/shortenedUrls/actions/shortenActions';
import {useShortened} from '../../../state/shortenedUrls/contexts/shortenedUrls';
import {shortenerStyles} from '../styles/styles';
import {IShortenedUrl} from '../../../state/defaultStates';

const ShortenedUrl: FC<IShortenedUrl> = ({url, short_url, slug}) => {
  const {
    dispatch,
    state: {loading},
  } = useShortened();

  return (
    <View style={shortenerStyles.row}>
      <Text numberOfLines={1} style={shortenerStyles.rowText}>
        {url + ': ' + short_url}
      </Text>
      <TouchableOpacity
        style={shortenerStyles.del}
        disabled={loading}
        onPress={() => removeUrl({dispatch, slug})}>
        <Text style={shortenerStyles.delText}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShortenedUrl;
