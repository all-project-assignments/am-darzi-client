import React from 'react'
import Products from '../Products/Products'
import { useLocation } from 'react-router-dom'

const ProductsWrapper = () => {

  const location = useLocation();
  // console.log(location)
  const search = location.search
  const path = location.pathname;
  console.log(search, path)
  // console.log(location.pathname)

  return (
    <div><Products /></div>
  )
}

export default ProductsWrapper