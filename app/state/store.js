import * as React from 'react';
// constants file needed!

const ShortenedContext = React.createContext();

function shortenedReducer(state, action) {
  switch (action.type) {
    case 'ADDURL': {
      return Object.assign({}, state, {
        shortenedUrls: [...state.shortenedUrls, action.payload],
        success: true,
        msg: 'Url added!',
        loading: false,
      });
    }
    case 'REMOVEURL': {
      const newArray = state.shortenedUrls.filter(
        (item, index) => index !== action.payload,
      );

      return Object.assign({}, state, {
        shortenedUrls: newArray,
        success: true,
        msg: 'Url removed!',
        loading: false,
      });
    }
    case 'RESETMSG': {
      return Object.assign({}, state, {
        msg: '',
      });
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ShortenedUrlProvider({children}) {
  const [state, dispatch] = React.useReducer(shortenedReducer, {
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
