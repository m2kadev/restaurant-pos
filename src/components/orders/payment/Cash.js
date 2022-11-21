import React, {useEffect, useState} from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'
import { sendOrder } from '../../../api/order'
import { clearCart } from '../../../features/Cart'
import SettingLoading from '../../main/settings/SettingLoading'

const Cash = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const [orderData, setOrderData] = useState([])
  const cart = useSelector(state => state.cart)

  const user = useSelector(state => state.user.user)
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }

  const addToOrder = useMutation(sendOrder, {
    onSuccess: () => {
        queryClient.invalidateQueries()
    }
  })

  useEffect(() => {
    setOrderData({
        customer_id: 1,
        total_amount: cart.totalPrice,
        total_discount: cart.totalDiscount,
        items: cart.orderItems
    })
  }, [cart])

  const handleConfirm = async () => {

    try {
        addToOrder.mutateAsync({orderData, config})
    } catch (error) {
        console.log(error)
    } finally {
        dispatch(clearCart())
    }

  }

  let content
  if (addToOrder.status === 'loading') {
    content = <SettingLoading overlay={true} />
  } else if (addToOrder.status === 'error') {
    content = 'Error'
  } else {
    content = null
  }

  return (
    <div className='cash-payment'>
      {content}
      <div className="cash-payment-info">
        <p>Cash Info</p>
      </div>
      <div className="form-btn-flex">
            <button className='btn btn-primary btn-xl-no-width'>Cancel</button>
            <button className='btn btn-primary-invert btn-xl-no-width' onClick={handleConfirm}>Confirm Payment</button>
      </div>
    </div>
  )
}

export default Cash
