import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../api/user'
import { useMutation, useQueryClient } from 'react-query'

const LogoutForm = ({setShowLogout}) => {
  const navigate = useNavigate()
  const queryclient = useQueryClient()

  const sendLogout = useMutation(logoutUser, {
    onSuccess: () => {
        queryclient.invalidateQueries()
    }
  })

  const handleLouout = async () => {

    try {
        sendLogout.mutateAsync()
    } catch (error) {
        console.log(error)
    } finally {
        localStorage.clear()
        navigate('/register')
    }
    
  }

  const handleBlur = (e) => {
    const currentTarget = e.currentTarget
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setShowLogout(false)
      }
    }, 0)
  }

  return (
    <div className='logout-form-wrapper' onClick={handleBlur}>
      <div className="logout-form" tabIndex='1'>
        <p>Are you sure you want to logout?</p>
        <div className='manange-category-btn-group'>
            <button className='btn btn-primary btn-xl' onClick={() => setShowLogout(false)}>Cancel</button>
            <button className='btn btn-primary-invert btn-xl' onClick={handleLouout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default LogoutForm
