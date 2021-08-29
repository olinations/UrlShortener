import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import {useShortened} from '../state/store';
import ShortenedUrl from './ShortenedUrl';

const Shortener = ({}) => {
  const {
    dispatch,
    state: {shortenedUrls, msg, status},
  } = useShortened();

  const [url, setUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const shortenUrl = () => {
    // const isUrl = checkIsUrl(url);
    // if (isUrl) // - not writing this function, but that's what I'd do
    if (url) {
      // fetch url shortener
      // upon successful response...
      dispatch({type: 'ADDURL', payload: url});
      setSubmitted(true);
      setUrl('');
    }
  };

  return (
    <SafeAreaView style={{margin: 20}}>
      {shortenedUrls.map((url, index) => (
        <ShortenedUrl url={url} index={index} key={index + 'GoldBellyLove!'} />
      ))}

      <TextInput
        style={{backgroundColor: '#ccc', color: '#333232'}}
        value={url}
        onChangeText={text => {
          if (submitted) {
            dispatch({type: 'RESETMSG'});
            setSubmitted(false);
          }
          setUrl(text);
        }}
      />

      <TouchableOpacity onPress={() => shortenUrl()}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <Text>{msg}</Text>
    </SafeAreaView>
  );
};

export default Shortener;
