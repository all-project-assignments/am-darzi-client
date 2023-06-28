import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../services/category'

const CategoryList = () => {
  const [categories, setCategories] = useState([])

  const getData = async () => {
    const data = await getAllCategories()
    console.log(data)
    setCategories(data)
  }
  console.log(categories)

  useEffect(() => {
    console.log("getData called")
    getData()
    console.log("getData called2")
  },[])

  return (
    <div className='text-white'>{
      Array.isArray(categories) && categories.length > 0 ? (
        <>have Categories</>) : <div>No categories</div>
      
    }</div>
  )
}

export default CategoryList