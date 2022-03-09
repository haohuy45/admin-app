import axios from 'axios';
import { api } from '../urlConfig';

const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL:api,
    header: {
        'Authentication': token ? `Bearer ${token}`: ''
    }

})

export default axiosInstance;