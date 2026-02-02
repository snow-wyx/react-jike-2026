//和用户相关的状态管理
import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken, removeToken } from "@/utils/token";
const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || ''
  },
  //同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      //localstorage存储
      _setToken(action.payload)
    }
  }
})

const { setToken } = userStore.actions

const userReducer = userStore.reducer

//异步方法 完成登录获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    //发送异步请求
    const res = await request.post('/authorizations', loginForm)
    //提交同步action进行token的存入
    dispatch(setToken(res.data.token))
  }
}

export { setToken, fetchLogin }

export default userReducer