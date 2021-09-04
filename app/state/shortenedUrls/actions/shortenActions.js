import * as types from '../constants/shortenConstants';

const headerObject = {
  'GB-Access-Token': 'f010573966698b94b3333db1afdaf045',
  'Content-Type': 'application/json',
};

async function addUrl(dispatch, url) {
  dispatch({type: types.START});
  try {
    const request = await fetch('https://api.bely.me/links', {
      method: 'POST',
      headers: headerObject,
      body: JSON.stringify({
        url,
      }),
    });
    const response = await request.json();
    // just to show loading...
    setTimeout(() => {
      dispatch({type: types.ADDURL, payload: response});
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({type: types.FAILED, payload: error});
  }
}

async function removeUrl(dispatch, slug) {
  dispatch({type: types.START});
  try {
    await fetch('https://api.bely.me/links/' + slug, {
      method: 'DELETE',
      headers: headerObject,
    });
    dispatch({type: types.REMOVEURL, payload: slug});
  } catch (error) {
    console.log(error);
    dispatch({type: types.FAILED, payload: error});
  }
}

async function loadUrls(dispatch) {
  dispatch({type: types.START});
  try {
    const request = await fetch('https://api.bely.me/links', {
      method: 'GET',
      headers: headerObject,
    });
    const response = await request.json();
    dispatch({type: types.LOADURLS, payload: response});
  } catch (error) {
    console.log(error);
    dispatch({type: types.FAILED, payload: error});
  }
}

export {loadUrls, addUrl, removeUrl};
