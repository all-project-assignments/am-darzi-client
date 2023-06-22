import { Navigate } from "react-router-dom"
import Home from "./Home"
import Designs from "./Designs"
import ErrorPage from "./ErrorPage"

const pagesData = [
  {
    path: "/",
    element: <Navigate to="/home" replace />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    title: "home",
  },
  {
    path: "designs",
    element: <Designs />,
    title: "designs",
  },
]

export default pagesData
