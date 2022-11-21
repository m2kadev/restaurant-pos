import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Dishes from '../components/main/home/Dishes'
import MenuNavbar from '../components/main/home/MenuNavbar'
import SearchForm from '../components/main/home/SearchForm'
import Orders from '../components/orders/Orders'
import PaymentSection from '../components/orders/payment/PaymentSection'

const Home = () => {

  const cart = useSelector(state => state.cart.items)
  const user = useSelector(state => state.user.user)

  const [category, setCategory] = useState('uncategorized')

  const [showConfirm, setShowConfirm] = useState(true)

  useEffect(() => {
    if (cart.length === 0) {
      setShowConfirm(showConfirm && cart.length !== 0)
    }
  }, [cart, showConfirm])

  return (
    <div className='home'>
        {showConfirm && cart.length !== 0 ? <PaymentSection setShowConfirm={setShowConfirm} showConfirm={showConfirm} /> : null}
        <div className='menu-wrapper'>
          <div className="home-header">
            <div className='user-info'>
                <h2>{user.username}</h2>
                <span>Friday, 2 February 21</span>
            </div>
            <SearchForm />
          </div>

          <MenuNavbar setCategory={setCategory} category={category} />
          <Dishes category={category} />
        </div>

        {
          cart.length !== 0 ? <Orders setShowConfirm={setShowConfirm} />: null
        }
    </div>
  )
}

export default Home