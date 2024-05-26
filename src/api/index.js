import path from './path';
import axios from '../utils/request';
import UserService from "@/utils/userUtil";
// import UserService from "@/utils/userUtil";


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
    },
    addCategoryUrl(categoryName) {
        return axios.post(
            path.baseURL + path.addCategoryUrl,
            {
                "name": categoryName,
                "UserId": UserService.getUserId()
            },
        )
    },
}

export default api;