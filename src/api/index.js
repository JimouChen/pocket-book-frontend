import path from './path';
import axios from '../utils/request';


const api = {
    userLogin(username, password) {
        return axios.post(
            path.baseURL + path.loginUrl,
            {
                "username": username,
                "password": password
            }
        );
    },
    userRegister(username, password, rePassword) {
        return axios.post(
            path.baseURL + path.registerUrl,
            {
                "username": username,
                "password": password,
                "re_password": rePassword
            }
        );
    },
    getAllCategories() {
        return axios.get(path.baseURL + path.getAllCategoriesUrl);
    },
    getCateByUser(username) {
        return axios.get(path.baseURL + path.getCateByUser + username);
    }
}

export default api;