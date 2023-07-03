import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../services/category'
import { Link } from 'react-router-dom'

const CategoryList = () => {
  const [categories, setCategories] = useState([])

  const getData = async () => {
    const data = await getAllCategories()
    // console.log(data)
    setCategories(data.categories)
  }
  console.log(categories)

  useEffect(() => {
    // console.log("getData called")
    getData()
    // console.log("getData called2")
  },[])

  return (
    <div className='text-white'>{
      Array.isArray(categories) && categories.length > 0 
      ?  <div className="hidden text-white sm:flex gap-3">
      {categories.map((cat, index) => (
        <Link to='/cat.name'><div key={cat._id}>{cat.name}</div></Link>
      ))}
    </div>
      : <div></div>
      
    }</div>
  )
}

export default CategoryList