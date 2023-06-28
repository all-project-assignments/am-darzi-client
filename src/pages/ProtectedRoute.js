import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { redirect, useNavigate } from 'react-router-dom'
import { showInfoToast } from '../utils/toasts'

const ProtectedRoute = ({children}) => {
  const {userInfo, userToken, loading, success} = useSelector(state => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    console.log("protectedRoute ", userToken, userInfo)
    if(!userToken || !userInfo){
      navigate('/login', {replace: true})
      showInfoToast("Please Login First")
    }
  },[userInfo, userToken])

  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute