// import axios from "axios";
//
// const axiosConf = () => {
//     let token = localStorage.getItem('token');
//
//     let conf = axios.create({
//         baseURL: 'https://comed-backend.herokuapp.com/api/',
// //         responseType: 'json',
// //         withCredentials: true,
// //     });
// //
//     if (token) {
//         conf['headers'] = { Authorization: `Bearer ${token}` };
//     }
//
//     return conf;
// };
// export default axiosConf();

import axios from "axios";

const $host = axios.create({
    baseURL: 'https://comed-backend.herokuapp.com/',
    responseType: 'json',
    withCredentials: true,
})

const authInterceptor = config => {
    let token = localStorage.getItem('token');

    if (token) {
        config.headers.authorization = `Bearer ${token}`
        return config
    }
}

$host.interceptors.request.use(authInterceptor)

export default $host;