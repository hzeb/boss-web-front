import request from 'UTIL/request';

export function login(account) {
  return request(`/sparkoa/login`,{
    method: 'POST',
    body: account
  });
}

export function getAccount(values) {
  return request(`/sparkoa/baseUser/getCurrentUser`);
}
