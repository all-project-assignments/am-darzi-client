import { Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Designs from "../pages/Designs"
import ErrorPage from "../pages/ErrorPage"
import Layout from "../pages/Layout/Layout"

const pagesData = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        title: "home",
      },
      {
        path: "designs",
        element: <Designs />,
        title: "designs",
      },
    ]
  },
]

export default pagesData
