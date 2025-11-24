import Layout from '@/pages/Layout/index'
import Login from '@/pages/Login/index'
// import Home from '@/pages/Home/index'
// import Article from '@/pages/Article/index'
// import Publish from '@/pages/Publish/index'

import { createBrowserRouter } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'
import { lazy, Suspense } from 'react'

// 路由懒加载
// 1.lazy函数对组件进行导入
const Home = lazy(() => import('@/pages/Home/index'))
const Article = lazy(() => import('@/pages/Article/index'))
const Publish = lazy(() => import('@/pages/Publish/index'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,
        // 2.使用suspense组件包裹路由组件
        element: <Suspense fallback={'加载中'}><Home /></Suspense>
      },
      {
        path: 'article',
        element: <Suspense fallback={'加载中'}><Article /></Suspense>
      },
      {
        path: 'publish',
        element: <Suspense fallback={'加载中'}><Publish /></Suspense>
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router