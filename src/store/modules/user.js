import { request } from "@/utils"
import { createSlice } from "@reduxjs/toolkit"
import { setToken as _setToken, getToken } from '@/utils/token'

const userStore = createSlice({
  name: 'user',
  // 数据状态
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  // 修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      // 本地持久化
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    }
  }
})

// 结构出actionCreator
const { setToken, setUserInfo } = userStore.actions

// 获取reducer
const userReducer = userStore.reducer

// 异步方法 登录获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm)
    dispatch(setToken(res.data.token))
  }
}

// 异步方法 获取用户信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await request.get('/user/profile')
    dispatch(setUserInfo(res.data))
  }
}

export { setToken, fetchLogin, fetchUserInfo }

export default userReducer