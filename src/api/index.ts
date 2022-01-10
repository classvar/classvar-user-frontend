import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.classvar.com/',
  withCredentials: false,
});

export default instance;
