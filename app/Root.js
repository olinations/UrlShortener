import React from 'react';
import {ShortenedUrlProvider} from './state/store';
import Shortener from './screens/Shortener';

const Root = ({}) => {
  return (
    <ShortenedUrlProvider>
      <Shortener />
    </ShortenedUrlProvider>
  );
};

export default Root;
