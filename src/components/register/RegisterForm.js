import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { createUser } from '../../api/user'

const RegisterForm = ({setFlipCard}) => {
  const queryClient = useQueryClient()
  const [user, setUser] = useState({username: '', password: '', password_confirmation: ''})
  const [content, setContent] = useState('')

  const sendUser = useMutation(createUser, {
    onSuccess: () => {
        queryClient.invalidateQueries()
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (user.password !== user.password_confirmation) {
       setContent('The password confirmation does not match!')
    } else {
        try {
            await sendUser.mutateAsync(user)
        } catch (error) {
            console.log(error)
        } finally {
            setFlipCard(true)
        }
    }
  }

  return (
    <div 
    className="register-form-wrapper"
    >
        <p>Food POS Register</p>
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label>Username</label>
                <input type='text' placeholder='Username' value={user.username} onChange={e => setUser({...user, username: e.target.value})} required autoFocus />
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type='password' placeholder='password' value={user.password} onChange={e => setUser({...user, password: e.target.value})} required />
            </div>
            <div className="form-control">
                <label>Confirm Password</label>
                <input type='password' placeholder='confirm password' value={user.password_confirmation} onChange={e => setUser({...user, password_confirmation: e.target.value})} required />
            </div>
            <p className='error-login'>{content}</p>
            <button type='submit' className='btn btn-primary-invert btn-xl'>
                Register
            </button>

        </form>
        <span onClick={() => setFlipCard(true)}>Already have an account? Login</span>
    </div>
  )
}

export default RegisterForm