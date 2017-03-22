import request from 'UTIL/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  // return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
  // return request(`/sparkoa/getLoginCount`);
  return request(`/eduboss/SystemAction/getMenuList.do`);
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}

export function login(code) {
  return request(`/eduboss/UserController/loginCallBackNew.do?code=${code}`);
}