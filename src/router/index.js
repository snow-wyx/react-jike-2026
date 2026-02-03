import { Component } from "react";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login"
import { createBrowserRouter } from 'react-router-dom'
import { AuthRoute } from "@/components/AuthRoute";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish/publish";

//路由配置实例
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "article",
        element: <Article />,
      },
      {
        path: "Publish",
        element: <Publish />,
      },

    ]
  },
  {
    path: "/login",
    element: <Login />
  }
])

export default router