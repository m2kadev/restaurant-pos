import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import OrderItems from './OrderItems'

const OrderTable = () => {

  const items = useSelector(state => state.cart.items)
  const [activeScroll, setActiveScroll] = useState(false)

  useEffect(() => {
    handleScrollBar()

    setTimeout(() => {
        removeScrollbar()
    }, 3000);

  }, [items])
  

  const handleScrollBar = () => {
    setActiveScroll(true)
  }

  const removeScrollbar = () => {
    setActiveScroll(false)
  }

  return (
    <div className={activeScroll ? 'order-table-wrapper scrollbar-active': 'order-table-wrapper hide-scrollbar'} onMouseOver={handleScrollBar} onMouseOut={removeScrollbar}>

        <div className="order-table">
            <p className='order-item-first'>Item</p>
            <p className='order-item-second'>Qty</p>
            <p className='order-item-third'>Price</p>
        </div>

        <div className="order-items-wrapper">
            {
            items.map(item => (
                <OrderItems item={item} key={item.id} />
            ))
            }
        </div>

    </div>
  )
}

export default OrderTable