import Home from '../pages/Home';
import Designs from '../pages/Designs';
import ErrorPage from '../pages/ErrorPage';
import Layout from '../pages/Layout/Layout';
import Login2 from '../pages/Login/Login2';
import Register from '../pages/Register/Register';
import Products from '../pages/Products/Products';
import ProductDetails2 from '../pages/Products/ProductDetails2'
import Profile from '../pages/Profile/Profile';
import ProtectedRoute from '../pages/ProtectedRoute';
import ProductsWrapper from '../pages/components/ProductsWrapper';
// import Cart from '../pages/Cart/Cart';
const pagesData = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        title: 'home',
      },
      {
        path: '/profile',
        element: <ProtectedRoute><Profile /></ProtectedRoute>,
        title: 'user-profile'
      },
      {
        path: '/products',
        element: <Products />,
        title: 'Suits',
      },
      {
        path: '/products/:id',
        element: <ProductDetails2 />,
        title: 'Product',
      },
      // this may be something illogical
      {
        path: '/:catName',
        element: <ProductsWrapper></ProductsWrapper>,
        title: 'Product',
      },
      // {
      //   path: 'cart',
      //   element: <Cart />,
      //   title: 'AM-Darzi | Cart'
      // },
      {
        path: 'designs',
        element: <Designs />,
        title: 'designs',
      },
    ],
  },
  {
    path: '/login',
    element: <Login2 />,
    title: 'Login',
  },
  {
    path: '/register',
    element: <Register />,
    title: 'Sign-up',
  },
];

export default pagesData;
