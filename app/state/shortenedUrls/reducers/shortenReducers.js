import * as types from '../constants/shortenConstants';

function shortenReducer(state, action) {
  switch (action.type) {
    case types.LOADURLS: {
      return Object.assign({}, state, {
        shortenedUrls: [...action.payload],
        status: 1,
        msg: "URL's loaded!",
        loading: false,
      });
    }
    case types.START: {
      return Object.assign({}, state, {
        loading: true,
        msg: 'Processing...',
      });
    }
    case types.ADDURL: {
      return Object.assign({}, state, {
        shortenedUrls: [...state.shortenedUrls, action.payload],
        status: 1,
        msg: 'URL added successfully!',
        loading: false,
      });
    }
    case types.FAILED: {
      return Object.assign({}, state, {
        loading: false,
        msg: action.payload,
      });
    }
    case types.REMOVEURL: {
      const newArray = state.shortenedUrls.filter(
        item => item.slug !== action.payload,
      );

      return Object.assign({}, state, {
        shortenedUrls: newArray,
        success: true,
        msg: 'Url removed!',
        loading: false,
      });
    }
    case types.RESETMSG: {
      return Object.assign({}, state, {
        msg: '',
      });
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export {shortenReducer};
