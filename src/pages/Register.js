import React, {useState} from 'react'
import LoginForm from '../components/register/LoginForm'
import RegisterForm from '../components/register/RegisterForm'

const Register = () => {
  const [flipCard, setFlipCard] = useState(null)

  return (
    <div className='register'>
        <div className='register-bg'>
          <div className="r-box"></div>
          <div className="r-box"></div>
          <div className="r-box"></div>
          <div className="r-box"></div>
        </div>

        <div className={flipCard ? 'register-box flip': 'register-box flip-invert'}>
            <RegisterForm flipCard={flipCard} setFlipCard={setFlipCard} />
            <LoginForm flipCard={flipCard} setFlipCard={setFlipCard} />
        </div>
    </div>
  )
}

export default Register