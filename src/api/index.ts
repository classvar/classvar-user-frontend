import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.classvar.com/api/',
  withCredentials: true,
});

export default instance;