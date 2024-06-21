import path from './path';
import axios from '../utils/request';
import UserService from "@/utils/userUtil";
import billingType from "@/utils/constDataUtil";


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
    addCategoryByName(categoryName) {
        return axios.post(
            path.baseURL + path.addCategoryUrl,
            {
                "name": categoryName,
                "UserId": UserService.getUserId()
            },
        )
    },
    deleteCategoryByNames(categoryNames) {
        return axios.delete(
            path.baseURL + path.deleteCategoryUrl,
            {
                data: {categoryNames}
            }
        )
    },
    addExpenses(formData) {
        return axios.post(
            path.baseURL + path.addExpensesUrl,
            formData
        )
    },
    searchExpenses(beginDate, endDate, title, limit, offset) {
        return axios.post(
            path.baseURL + path.searchExpensesUrl,
            {
                title: title,
                type: billingType.Pay,
                transaction_begin_date: beginDate,
                transaction_end_date: endDate,
                limit: limit,
                offset: offset
            }
        )
    }

}

export default api;