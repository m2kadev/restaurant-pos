import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import { BiImageAdd } from 'react-icons/bi'
import { useCustomSelect } from '../../../../hooks/useCustomSelect'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { updateProduct } from '../../../../api/products'
import SettingLoading from '../SettingLoading'
import { getCategories } from '../../../../api/categories'
import { useSelector } from 'react-redux'

const EditProductForm = ({editProductData, setShowEditForm}) => {
  
  const [newProductData, setNewProductData] = useState(editProductData)
  const user = useSelector(state => state.user.user)

  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }
  const { data: categories, isLoading, isError } = useQuery(['category', config], getCategories)

  const { onChange } = useCustomSelect(categories)
  
  const [showCategory, setShowCategory] = useState(false)
  const [image, setImage] = useState('')
  const queryClient = useQueryClient()

  const {status, mutateAsync: sendEditedProduct} = useMutation(updateProduct, {
    onSuccess: () => {
        queryClient.invalidateQueries()
    }
  })

  if (isLoading) {
    //
  } else if (isError) {
    //
  } else {
    //
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('title', newProductData.title)
    formData.append('price', newProductData.price)
    formData.append('discount', newProductData.discount)
    formData.append('category', newProductData.category)
    formData.append('stock', newProductData.stock)
    formData.append('quantity', newProductData.quantity)

    if (image !== '') {
        formData.append('img', image)
    }

    try {
        await sendEditedProduct({id: newProductData.id, formData, config})
    } catch (err) {
        //
    } finally {
        setShowEditForm(false)
    }
    
  }

  let content
  if (status === 'loading') {
    content = <SettingLoading overlay={true} />
  } else {
    content = null
  }

  const handleBlur = (e) => {
    const currentTarget = e.currentTarget
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setShowEditForm(false)
      }
    }, 0)
  }

  return (
    <div className='add-product-form-wrapper' onClick={handleBlur}>
        {content}
        <div className="add-product-form" tabIndex='1'>
            <div className="product-form-header">
                <p>Edit Product</p>
                <div className='product-times-icon' onClick={() => setShowEditForm(false)}>
                    <FaTimes className='times-icon' />
                </div>
            </div>

            <form className="product-form" onSubmit={handleEdit}>

                <div className="form-control-flex">
                    <div className="form-control">
                        <label>Product Title</label>
                        <input type='text'
                         placeholder="product title" 
                         value={newProductData.title} 
                         onChange={e => setNewProductData({...newProductData, title: e.target.value})}  
                         autoFocus required />
                    </div>
                    <div className="form-control">
                        <label>Price</label>
                        <input type='text' 
                        placeholder="0.00 kyats" 
                        value={newProductData.price} 
                        onChange={e => setNewProductData({...newProductData, price: e.target.value})}
                        required />
                    </div>
                </div>

                <div className="form-control-flex">
                    <div>
                        <p>Product Category</p>
                        <div className='order-type-wrapper'>
                            <div className='order-type' onClick={() => setShowCategory(old => !old)}>
                                <BsChevronDown />
                                <p>{newProductData.category}</p>
                            </div>

                            {showCategory ? <div className="product-categories scrollbar-active">
                                {
                                    categories?.map((menu, i) => (
                                        <div 
                                        key={i}
                                        className='product-category'
                                         onClick={() => {
                                            onChange(menu, i)
                                            setNewProductData({...newProductData, category: menu.value})
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
                        <input type='text'
                         placeholder="1000" 
                         value={newProductData.stock}
                         onChange={e => setNewProductData({...newProductData, stock: e.target.value})} 
                         required />
                    </div>
                </div>

                <div className="form-control-flex">
                    <div className="form-control">
                        <label>Discount</label>
                        <input type='text' 
                        placeholder="500 kyats" 
                        value={newProductData.discount} 
                        onChange={e => setNewProductData({...newProductData, discount: e.target.value})}
                        required />
                    </div>
                    <div className='table-no-wrapper'>
                        <p>Product ID</p>
                        <div className='table-no'>{newProductData.id}</div>
                    </div>
                </div>

                <div className="form-control">
                    <label>Product Image</label>
                    
                    <div className="fake-file-upload">
                        <input type='file' onChange={e => setImage(e.target.files[0])} />
                        <div 
                        className="file-upload"
                        style={{color: image === '' ? '#111': '#fff', fontWeight: '600'}} 
                        >
                            <BiImageAdd className='image-add' />
                            <p>Edit Product Image</p>
                            {
                                image === '' 
                                ? 
                                <img className='edit-img' src={`http://127.0.0.1:8000/storage/${newProductData.img}`} alt={newProductData.title} />
                                : 
                                <p className='file-name'>{image.name}</p>
                            }

                        </div>
                    </div>
                </div>

                <div className="form-btn-flex">
                    <button className='btn btn-primary btn-xl-no-width' onClick={() => setShowEditForm(false)}>Cancel</button>
                    <button className='btn btn-primary-invert btn-xl-no-width' type='submit'>Edit Product</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditProductForm