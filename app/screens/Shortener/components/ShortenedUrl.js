import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {removeUrl} from '../../../state/shortenedUrls/actions/shortenActions';
import {useShortened} from '../../../state/shortenedUrls/contexts/shortenedUrls';
import {shortenerStyles} from '../styles/styles';

const ShortenedUrl = ({url}) => {
  const {
    dispatch,
    state: {loading},
  } = useShortened();

  return (
    <View style={shortenerStyles.row}>
      <Text numberOfLines={1} style={shortenerStyles.rowText}>
        {url.url + ': ' + url.short_url}
      </Text>
      <TouchableOpacity
        style={shortenerStyles.del}
        disabled={loading}
        onPress={() => removeUrl(dispatch, url.slug)}>
        <Text style={shortenerStyles.delText}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShortenedUrl;
