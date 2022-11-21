import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
  const user = useSelector(state => state.user.user)

  if (!user) {
    return <Navigate to='/register' />
  } else {
    return children
  }
}

export default ProtectedRoutes