// import axios
import axios from 'axios';

// create axios base URL API
const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1/',
});

// set authorization token header
export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};