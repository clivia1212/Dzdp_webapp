
import 'whatwg-fetch';
import 'es6-promise';

// 将对象拼接成key1=value1&key2=value2的字符串形式
function obj2params(obj) {
  var params = [];
  for (var i in obj) {
    params.push(`${i}=${encodeURIComponent(obj[i])}`);
  }
  return params.join('&');
}

// 发送post请求
export function post(url, paramsObj) {
  var result = fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: obj2params(paramsObj),
  });
  return result;
}