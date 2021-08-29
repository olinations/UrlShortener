function shortenReducer(state, action) {
  switch (action.type) {
    case 'LOADURLS': {
      return Object.assign({}, state, {
        shortenedUrls: [...action.payload],
        status: 1,
        msg: "URL's loaded!",
        loading: false,
      });
    }
    case 'STARTPROCESS': {
      return Object.assign({}, state, {
        loading: true,
        msg: 'Processing...',
      });
    }
    case 'FINISHEDADDINGURL': {
      return Object.assign({}, state, {
        shortenedUrls: [...state.shortenedUrls, action.payload],
        status: 1,
        msg: 'URL added successfully!',
        loading: false,
      });
    }
    case 'FAILEDADDINGURL': {
      return Object.assign({}, state, {
        loading: false,
        msg: action.payload,
      });
    }
    case 'REMOVEURL': {
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

export {shortenReducer};
