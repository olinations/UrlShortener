import * as React from 'react';
import {shortenReducer} from '../reducers/shortenReducers';
// constants file needed!

const ShortenedContext = React.createContext();

function ShortenedUrlProvider({children}) {
  const [state, dispatch] = React.useReducer(shortenReducer, {
    shortenedUrls: [],
    loading: false,
    status: 0,
    msg: '',
  });

  const value = {state, dispatch};

  return (
    <ShortenedContext.Provider value={value}>
      {children}
    </ShortenedContext.Provider>
  );
}

function useShortened() {
  const context = React.useContext(ShortenedContext);
  if (context === undefined) {
    throw new Error('useShortened must be used within a ShortenedUrlProvider');
  }
  return context;
}

export {ShortenedUrlProvider, useShortened};
