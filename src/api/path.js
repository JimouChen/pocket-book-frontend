const base = {
    baseURL: 'http://127.0.0.1:2333/api/v1',
    loginUrl: '/user/login',
    registerUrl: '/user/signup',
    getAllCategoriesUrl: "/all_category",
    getCateByUser: '/category?username=',
    addCategoryUrl: '/category',
    deleteCategoryUrl: '/category',
    addExpensesUrl: '/billing/expenses',
    editExpensesUrl: '/billing/expenses',
    deleteExpensesUrl: '/billing/expenses',
    searchExpensesUrl: '/billing/search',
}

export default base;