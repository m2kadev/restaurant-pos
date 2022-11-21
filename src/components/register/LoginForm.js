import React, { useState } from 'react'
import { useQueryClient, useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../api/user'
import { createUser } from '../../features/User'

const LoginForm = ({setFlipCard}) => { 
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [user, setUser] = useState({username: '', password: ''})

  const postUser = useMutation(loginUser, {
    onSuccess: () => {
        queryClient.invalidateQueries()
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const res = await postUser.mutateAsync(user)
        dispatch(createUser({username: res.data.user.username, token: res.data.token}))
        navigate('/')
    } catch (error) {
       //
    }

  }

  let content
  if (postUser.status === 'error') {
    content = <p className='error-login'>{postUser.error.response.data.message}</p>
  }

  return (
    <div 
    className="register-form-wrapper"
    >
        <p>Login</p>
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label>Username</label>
                <input type='text' placeholder='Username' value={user.username} onChange={e => setUser({...user, username: e.target.value})} required autoFocus />
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type='password' placeholder='password' value={user.password} onChange={e => setUser({...user, password: e.target.value})} required />
            </div>
            {content}
            <button type='submit' className='btn btn-primary-invert btn-xl'>
                Login
            </button>
        </form>
        <span onClick={() => setFlipCard(false)}>Don't have an account? Register</span>
    </div>
  )
}

export default LoginForm