import axios from 'axios'
import config from './config.js'

    // 响应拦截
    axios.interceptors.response.use(function (response) {
        var data
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if(response.data == undefined){
        data = response.request.responseText
        } else{
        data = response.data
        }
        // 判断data不是Object时，解析成Object
        if(!(data instanceof Object)){
        data = JSON.parse(data)
        }
        return data
    }, function (error) {
        return Promise.reject(error)
    });

    class API {
    // POST
    post(params) {
        config.data = params.data
        return axios.post(params.url,config.data,config)
    }
    // 此处可以封装其他方法
    }

export default API