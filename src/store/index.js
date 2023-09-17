import Vue from 'vue'
import Vuex from 'vuex'
import {setToken} from "@/utils/localStorage";
 
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
    //是否登录判断
    token:''
  },
  getters: {
    getToken: state => state.token
  },
  mutations:{
    login_s:(state,n) => {
      //传入登录状态islogin
      setToken(n)
      state.token = n;
    }
  },
  actions: {
  },
  modules: {
  }
})