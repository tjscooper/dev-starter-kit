import 'whatwg-fetch';

export function getUsers() {
  return _get('users');
}

/* PRIVATE */

function _get(url) {
  return fetch(url)
    .then(_onSuccess, _onError);
}

function _onSuccess(res) {
  return res.json();
}

function _onError(err) {
  throw new Error(err);
}