import axios from 'axios';

axios.defaults.baseURL = window.location.origin;
axios.defaults.headers.common['token'] = localStorage.getItem('token');

window.axios = axios;

export default axios;
