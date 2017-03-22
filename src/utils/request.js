import fetch from 'dva/fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if(response.status == 401){
    window.location.href = 'https://logintest.xiaojiaoyu100.com/oauth2/boss?redirect_uri=http://localhost:9000/';
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const defaultOptions = {credentials: 'same-origin'};
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  const response = await fetch(url, Object.assign({},defaultOptions,options));

  checkStatus(response);

  if(url.indexOf('/eduboss/UserController/loginCallBackNew.do') >= 0){
    return response;
  }

  try{
    const data = await response.json();

    const ret = {
      data,
      headers: {},
    };

    if (response.headers.get('x-total-count')) {
      ret.headers['x-total-count'] = response.headers.get('x-total-count');
    }
    return ret;
  }catch (e){
      debugger;
      // const text = await response.text();
      // if(text.indexOf('登录页面已迁移') > 0){
        window.location.href = 'https://logintest.xiaojiaoyu100.com/oauth2/boss?redirect_uri=http://localhost:9000/';
        return;
      // }
  }
}
