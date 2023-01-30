import axios, {AxiosRequestConfig} from "axios";
import Qs from 'qs';

const api = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,     // 所有请求的公共地址部分
    timeout: 3000
})

// 添加一个请求拦截器
api.interceptors.request.use((config: AxiosRequestConfig) => {
        config.headers.languagetype = 'CN';      // 举例，加上一个公共头部
        config.data = Qs.stringify(config.data); // 处理数据，可不写
        return config;
    },
    err => {
        return Promise.reject(err);
    });

//添加一个响应拦截器
api.interceptors.response.use(res => {
    //在这里对返回的数据进行处理
    console.log(res.data, '网络正常');
    return res.data;
}, err => {
    console.log('网络开了小差！请重试...');
    return Promise.reject(err);
})

export default api
