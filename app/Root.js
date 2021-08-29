import React from 'react';
import {ShortenedUrlProvider} from './state/shortenedUrls/contexts/shortenedUrls';
import Shortener from './screens/Shortener/Shortener';

const Root = ({}) => {
  return (
    <ShortenedUrlProvider>
      <Shortener />
    </ShortenedUrlProvider>
  );
};

export default Root;
