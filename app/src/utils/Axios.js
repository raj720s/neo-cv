import axios from 'axios';
import { API_BASE } from './configs';
// import store from '../store';
// import { authConstants } from '../actions/constants';



const axiosIntance = axios.create({
    baseURL: API_BASE,
    // headers: {
    //     'Authorization': token ? `Bearer ${JSON.stringify(token)}` : ''
    // }
});

axiosIntance.interceptors.request.use((req) => {
    // const { auth } = store.getState();
    // if (auth.token) {
    const token = window.localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
}, error => {
    return Promise.reject(error);
})

// axiosIntance.interceptors.response.use((res) => {
//     return res;
// }, (error) => {
//     console.log(error.response);
//     const status = error.response ? error.response.status : 500;
//     if (status && status === 500) {
//         // localStorage.clear();
//         // store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
//     }
//     return Promise.reject(error);
// })

// Add a response interceptor to handle errors globally
axiosIntance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Customize the error response object
        if (error.response) {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            return Promise.reject({
                status: error.response.status,
                error: error.response.data,
                message: error.response.data.message
            });
        } else if (error.request) {
            // The request was made, but no response was received
            return Promise.reject({
                status: 500,
                data: { message: 'No response from the server.' },
                message: 'No response from the server.'
            });
        } else {
            // Something happened in setting up the request that triggered an Error
            return Promise.reject({
                status: 500,
                data: { message: 'Error setting up the request.' },
                message: 'Error setting up the request.'
            });
        }
    }
);

export default axiosIntance;