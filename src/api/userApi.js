import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
  return _get('users');
}

/* PRIVATE */

function _get(url) {
  return fetch(baseUrl + url)
    .then(_onSuccess, _onError);
}

function _onSuccess(res) {
  return res.json();
}

function _onError(err) {
  throw new Error(err);
}