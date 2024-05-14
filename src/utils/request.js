import axios from "axios"

const instance = axios.create({
    timeout: 5000,
})

const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }

}

instance.interceptors.request.use(
    // 处理成功的请求
    config => {
        // if (config.method === "post" || config.method === "put") {
        //     console.log(config.data)
        // }
        return config;
    },
    // 处理失败的请求
    error => Promise.reject(error)
)


instance.interceptors.response.use(
    response => response.status === 200 ?
        Promise.resolve(response) : Promise.reject(response),
    error => {
        const {response} = error;
        errorHandle(response.status, response.info)
    }
)
export default instance;