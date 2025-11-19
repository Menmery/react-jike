// 路由跳转时检查是否携带token

import { getToken } from '@/utils/token'
import { Navigate } from 'react-router-dom'

export function AuthRoute({ children }) {
  const token = getToken()
  if (token) {
    // 幽灵标签 不需要额外的 DOM 包装，保持代码的简洁
    return <>{children}</>
  } else {
    // replace 先当创建一个新页
    return <Navigate to={'/login'} replace></Navigate>
  }
}