import React, {FC, useState, useEffect} from 'react';
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

const Shortener: FC = ({}) => {
  const {
    dispatch,
    state: {shortenedUrls, msg, loading, status},
  } = useShortened();

  const [url, setUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const handleInputChange = (text: string) => {
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
    setShowMessage(true);

    const removeMsg = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    return () => clearTimeout(removeMsg);
  }, [msg]);

  useEffect(() => {
    loadUrls(dispatch);
  }, []);

  return (
    <SafeAreaView style={shortenerStyles.container}>
      <ScrollView style={shortenerStyles.scrollContainer}>
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

        {showMessage && <Text>{msg}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shortener;
