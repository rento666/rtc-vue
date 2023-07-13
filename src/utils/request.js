import axios from 'axios'
import router from '../router'

//1.利用axios对象的方法create，去创建一个axios实例
//2.这里requests就是axios，只不过稍微配置一下
const request = axios.create({
  // 基础路径，请求时路径会出现的api
  baseURL: "/api",
  // 超时时间5s
  timeout:5000
})

// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use((config)=>{

  let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
    if (user) {
        config.headers['token'] = user.token;  // 设置请求头
    }
  return config
},error =>{
  return Promise.reject(error)
})

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
  response => {
      let res = response;
      // 如果是返回的文件
      if (response.config.responseType === 'blob') {
          return res
      }
      // 兼容服务端返回的字符串数据
      if (typeof res === 'string') {
          res = res ? JSON.parse(res) : res
      }
      // 当权限验证不通过的时候给出提示
      if (res.code === '401') {
        router.push("/signin&up")
      }
      return res;
  },
  error => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
  }
)

export default request



