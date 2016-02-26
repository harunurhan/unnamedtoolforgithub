import 'whatwg-fetch';

function request(url, data, method) {
  return fetch(url, {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : data,
    method,
  });
}

export function post(url, data) {
  return request(url, data, 'POST');
}
