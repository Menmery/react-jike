import { request } from "@/utils"
import { createSlice } from "@reduxjs/toolkit"

const userStore = createSlice({
  name: 'user',
  // 数据状态
  initialState: {
    token: ''
  },
  // 修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    }
  }
})

// 结构出actionCreator
const { setToken } = userStore.actions

// 获取reducer
const userReducer = userStore.reducer

// 异步方法 登录获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm)
    dispatch(setToken(res.data.token))
  }
}

export { setToken, fetchLogin }

export default userReducer