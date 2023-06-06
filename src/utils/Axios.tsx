import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'http://api.weatherapi.com/v1/forecast.json?key=23cdc20e94a34421964110528230506&q=',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});

export default axiosInstance;
