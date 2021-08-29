const headerObject = {
  'GB-Access-Token': 'f010573966698b94b3333db1afdaf045',
  'Content-Type': 'application/json',
};

async function addUrl(dispatch, url) {
  dispatch({type: 'STARTPROCESS'});
  try {
    const request = await fetch('https://api.bely.me/links', {
      method: 'POST',
      headers: headerObject,
      body: JSON.stringify({
        url,
      }),
    });
    const response = await request.json();
    setTimeout(() => {
      dispatch({type: 'FINISHEDADDINGURL', payload: response});
    }, 1000);
    // dispatch({type: 'FINISHEDADDINGURL', payload: response});
  } catch (error) {
    console.log(error);
    dispatch({type: 'FAILEDADDINGURL', payload: error});
  }
}

async function removeUrl(dispatch, slug) {
  dispatch({type: 'STARTPROCESS'});
  try {
    await fetch('https://api.bely.me/links/' + slug, {
      method: 'DELETE',
      headers: headerObject,
    });
    dispatch({type: 'REMOVEURL', payload: slug});
  } catch (error) {
    console.log(error);
    dispatch({type: 'FAILEDDELETINGURL', payload: error});
  }
}

async function loadUrls(dispatch) {
  dispatch({type: 'STARTPROCESS'});
  try {
    const request = await fetch('https://api.bely.me/links', {
      method: 'GET',
      headers: headerObject,
    });
    const response = await request.json();
    dispatch({type: 'LOADURLS', payload: response});
  } catch (error) {
    console.log(error);
    dispatch({type: 'FAILEDLOADINGGURL', payload: error});
  }
}

export {loadUrls, addUrl, removeUrl};
