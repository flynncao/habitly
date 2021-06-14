import axios from 'axios';
import instance from './base';
axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.Accept = 'application/json';
export default {
  index() {
    return instance.get('habits/');
  },
  create(data) {
    return instance.post('habits/', data);
  },
  update(data, pk) {
    return instance.put(`habits/${pk}/`, data);
  },
  delete(pk) {
    return instance.delete(`habits/${pk}/`);
  },
};
