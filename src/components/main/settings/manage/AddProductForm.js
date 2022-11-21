import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import { BiImageAdd } from 'react-icons/bi'
import { useCustomSelect } from '../../../../hooks/useCustomSelect'
import { useMutation, useQuery } from 'react-query'
import { addProduct, getProducts } from '../../../../api/products'
import { useQueryClient } from 'react-query'
import SettingLoading from '../SettingLoading'
import { getCategories } from '../../../../api/categories'
import { useSelector } from 'react-redux'

const initialProduct = {
    title: '',
    price: '',
    discount: 0,
    stock: '',
    quantity: 1
}

const AddProductForm = ({setShowAddForm}) => {
  const queryClient = useQueryClient()
  const user = useSelector(state => state.user.user)
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }
  const { data: categories , isLoading, isError } = useQuery(['category', config] ,getCategories)

  const [image, setImage] = useState('No Image Choosen')
  const { selectedValue, onChange } = useCustomSelect(categories)
  const [product, setProduct] = useState({...initialProduct, category: selectedValue.value})
  const [showCategory, setShowCategory] = useState(false)

  const {status, mutateAsync: sendProduct} = useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    }
  })

  const { data: dishes, status: dishStatus } = useQuery(['products', config], getProducts)
 
  if (dishStatus === 'loading') {
    //
  } else if (dishStatus === 'error') {
    //
  } else {
    //
  }

  if (isLoading) {
    //
  } else if (isError) {
    //
  } else {
    //
  }

  const handleBlur = (e) => {
    const currentTarget = e.currentTarget
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setShowAddForm(false)
      }
    }, 0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let formData = new FormData()
    formData.append('title', product.title)
    formData.append('price', product.price)
    formData.append('discount', product.discount)
    formData.append('category', product.category)
    formData.append('stock', product.stock)
    formData.append('quantity', product.quantity)

    if (image !== '') {
        formData.append('img', image)
    }

    try {
        await sendProduct({formData, config})
    } catch (error) {
        
    } finally {
        setShowAddForm(false)
    }
  }

  let content 
  if (status === 'loading') {
    content = <SettingLoading overlay={true} />
  } else {
    content = null
  }

  return (
    <div 
    className='add-product-form-wrapper' 
    onClick={handleBlur}
    >
        {content}
        <div className="add-product-form" tabIndex='1'>
            <div className="product-form-header">
                <p>Add Product</p>
                <div className='product-times-icon' onClick={() => setShowAddForm(false)}>
                    <FaTimes className='times-icon' />
                </div>
            </div>

            <form className="product-form" onSubmit={handleSubmit}>

                <div className="form-control-flex">
                    <div className="form-control">
                        <label>Product Title</label>
                        <input type='text' placeholder="product title" value={product.title} onChange={e => setProduct({...product, title: e.target.value})} autoFocus required />
                    </div>
                    <div className="form-control">
                        <label>Price</label>
                        <input type='text' placeholder="0.00 kyats" value={product.price} onChange={e => setProduct({...product, price: e.target.value})} required />
                    </div>
                </div>

                <div className="form-control-flex">
                    <div>
                        <p>Product Category</p>
                        <div className='order-type-wrapper'>
                            <div className='order-type' onClick={() => setShowCategory(old => !old)}>
                                <BsChevronDown />
                                <p>{selectedValue.title}</p>
                            </div>

                            {showCategory ? <div className="product-categories scrollbar-active">
                                {
                                    categories?.map((menu, i) => (
                                        <div 
                                        key={i}
                                        className='product-category'
                                         onClick={() => {
                                            onChange(menu, i)
                                            setProduct({...product, category: menu.value})
                                            setShowCategory(false)
                                         }}
                                        >
                                        {menu.title}
                                        </div>
                                    ))
                                }
                            </div>: null}
                        </div>
                    </div>

                    <div className="form-control">
                        <label>Stock</label>
                        <input type='text' placeholder="1000" value={product.stock} onChange={e => setProduct({...product, stock: e.target.value})} required />
                    </div>
                </div>

                <div className="form-control-flex">
                    <div className="form-control">
                        <label>Discount</label>
                        <input type='text' placeholder="500 kyats" value={product.discount} onChange={e => setProduct({...product, discount: e.target.value})} required />
                    </div>
                    <div className='table-no-wrapper'>
                        <p>Product ID</p>
                        <div className='table-no'>{dishes?.length + 1}</div>
                    </div>
                </div>

                <div className="form-control">
                    <label>Product Image</label>
                    
                    <div className="fake-file-upload">
                        <input type='file' onChange={e => setImage(e.target.files[0])} />
                        <div 
                        className="file-upload"
                        style={{border: image.name ? '1px solid #50D1AA': null}} 
                        >
                            <BiImageAdd className='image-add' />
                            <p>Add Product Image</p>
                            <p className='file-name'>{image.name}</p>
                        </div>
                    </div>
                </div>

                <div className="form-btn-flex">
                    <button className='btn btn-primary btn-xl-no-width' onClick={() => setShowAddForm(false)}>Cancel</button>
                    <button className='btn btn-primary-invert btn-xl-no-width' type='submit'>Confirm Product</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddProductForm