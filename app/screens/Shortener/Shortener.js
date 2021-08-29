import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {useShortened} from '../../state/shortenedUrls/contexts/shortenedUrls';
import {
  loadUrls,
  addUrl,
} from '../../state/shortenedUrls/actions/shortenActions';
import ShortenedUrl from './components/ShortenedUrl';
import InputUrls from './components/InputUrl';
import Button from './components/Button';
import {shortenerStyles} from './styles/styles';

const Shortener = ({}) => {
  const {
    dispatch,
    state: {shortenedUrls, msg, loading, status},
  } = useShortened();

  const [url, setUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = text => {
    if (submitted) {
      dispatch({type: 'RESETMSG'});
      setSubmitted(false);
    }
    setUrl(text);
  };

  const shortenUrl = () => {
    // const properUrl = checkUrlFormat(url)
    // helper function needed before running api request
    if (url) {
      addUrl(dispatch, url);
      setSubmitted(true);
      setUrl('');
    }
  };

  useEffect(() => {
    loadUrls(dispatch);
  }, []);

  return (
    <SafeAreaView style={shortenerStyles.container}>
      <ScrollView stye={shortenerStyles.scrollContainer}>
        <Text style={shortenerStyles.title}>URL Shortener</Text>
        {shortenedUrls.map((url, index) => (
          <ShortenedUrl url={url} key={index + url.slug} />
        ))}

        <InputUrls
          url={url}
          loading={loading}
          handleInputChange={handleInputChange}
        />

        <Button shortenUrl={shortenUrl} loading={loading} />

        <Text>{msg}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shortener;
