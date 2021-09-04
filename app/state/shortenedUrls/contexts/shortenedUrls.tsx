import * as React from 'react';
import {shortenedState, ShortenedState} from '../../defaultStates';
import {shortenReducer} from '../reducers/shortenReducers';
import {Dispatch} from '../actions/actionTypes';

type ShortenedProviderProps = {children: React.ReactNode};

const ShortenedContext = React.createContext<
  {state: ShortenedState; dispatch: Dispatch} | undefined
>(undefined);

function ShortenedUrlProvider({children}: ShortenedProviderProps) {
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
