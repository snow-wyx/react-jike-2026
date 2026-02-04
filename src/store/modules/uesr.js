//和用户相关的状态管理
import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken, removeToken } from "@/utils/token";
import { loginAPI, getProfileAPI } from "@/apis/user";
const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  //同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      //localstorage存储
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
  }
})

const { setToken, setUserInfo, clearUserInfo } = userStore.actions

const userReducer = userStore.reducer

//异步方法 完成登录获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    //发送异步请求
    const res = await loginAPI(loginForm)
    //提交同步action进行token的存入
    dispatch(setToken(res.data.token))
  }
}
//获取用户信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    //发送异步请求
    const res = await getProfileAPI()
    //提交同步action进行token的存入
    dispatch(setUserInfo(res.data))
  }
}

export { setToken, fetchLogin, fetchUserInfo, clearUserInfo }

export default userReducer