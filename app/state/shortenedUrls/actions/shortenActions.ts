import * as types from '../constants/shortenConstants';
import {Dispatch} from './actionTypes';

const headerObject = {
  'GB-Access-Token': 'f010573966698b94b3333db1afdaf045',
  'Content-Type': 'application/json',
};

interface IAddUrl {
  dispatch: Dispatch;
  url: string;
  slug?: string;
}

interface IRemoveUrl {
  dispatch: Dispatch;
  slug: string;
}

async function addUrl(data: IAddUrl): Promise<void> {
  data.dispatch({type: types.START});
  try {
    const request = await fetch('https://api.bely.me/links', {
      method: 'POST',
      headers: headerObject,
      body: JSON.stringify({
        url: data.url,
        slug: data.slug,
      }),
    });
    const response = await request.json();

    if (response.errors) {
      data.dispatch({type: types.FAILED, payload: response.errors.url[0]});
    } else {
      // just to show loading...
      setTimeout(() => {
        data.dispatch({type: types.ADDURL, payload: response});
      }, 1000);
    }
  } catch (error) {
    console.log(error);
    data.dispatch({type: types.FAILED, payload: error});
  }
}

async function removeUrl(data: IRemoveUrl): Promise<void> {
  data.dispatch({type: types.START});
  try {
    await fetch('https://api.bely.me/links/' + data.slug, {
      method: 'DELETE',
      headers: headerObject,
    });
    data.dispatch({type: types.REMOVEURL, payload: data.slug});
  } catch (error) {
    console.log(error);
    data.dispatch({type: types.FAILED, payload: error});
  }
}

async function loadUrls(dispatch: Dispatch): Promise<void> {
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
