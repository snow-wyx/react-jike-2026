import { Component, lazy, Suspense } from "react";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login"
import { createBrowserRouter } from 'react-router-dom'
import { AuthRoute } from "@/components/AuthRoute";
// import Home from "@/pages/Home";
// import Article from "@/pages/Article";
// import Publish from "@/pages/Publish";
//路由懒加载- 1 借助lazy函数对组件进行导入
const Home = lazy(() => import('@/pages/Home'))
const Article = lazy(() => import('@/pages/Article'))
const Publish = lazy(() => import('@/pages/Publish'))


//路由配置实例
//路由懒加载-2 使用内置的 Suspense 组件渲染路由组件
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,
        element:<Suspense fallback = {'加载中'}><Home /></Suspense> ,
      },
      {
        path: "article",
        element:<Suspense fallback = {'加载中'}><Article /></Suspense> ,
      },
      {
        path: "Publish",
        element: <Suspense fallback = {'加载中'}><Publish /></Suspense>,
      },

    ]
  },
  {
    path: "/login",
    element: <Login />
  }
])

export default router