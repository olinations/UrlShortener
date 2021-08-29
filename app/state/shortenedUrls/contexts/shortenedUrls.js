import * as React from 'react';
import {shortenedState} from '../../defaultStates';
import {shortenReducer} from '../reducers/shortenReducers';

const ShortenedContext = React.createContext();

function ShortenedUrlProvider({children}) {
  const [state, dispatch] = React.useReducer(shortenReducer, shortenedState);

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
