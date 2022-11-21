import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useMutation, useQueryClient } from 'react-query'
import { postCategoroy } from '../../../../api/categories'
import SettingLoading from '../SettingLoading'
import { useSelector } from 'react-redux'

const AddCategory = ({setToggleAdd}) => {
  const queryClient = useQueryClient()
  const [category, setCategory] = useState({})
  const user = useSelector(state => state.user.user)
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }

  const {status, mutateAsync: sendCategory} = useMutation(postCategoroy, {
    onSuccess: () => {
        queryClient.invalidateQueries()
    }
  })

  const handleAdd = async (e) => {
    e.preventDefault()
    try {
        await sendCategory({category, config})
    } catch (error) {
            //
    } finally {
        setToggleAdd(false)
    }
  }

  let content
  if (status === 'loading') {
    content = <SettingLoading overlay={true} />
  } else if (status === 'error') {
    content = 'Error'
  } else {
    content = null
  }

  const handleBlur = (e) => {
    const currentTarget = e.currentTarget
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setToggleAdd(false)
      }
    }, 0)
  }

  return (
    <div className='add-category' onClick={handleBlur}>
        {content}
        <form className="add-category-form" onSubmit={handleAdd} tabIndex='1'>
            <div className='add-category-times' onClick={() => setToggleAdd(false)}><FaTimes /></div>
            <input type='text' 
            placeholder="Category Title" 
            onChange={e => 
                setCategory({title: e.target.value, value: e.target.value.toLowerCase()})
            } 
            autoFocus
            required
            />
            <button className='btn btn-primary btn-xl add-category-btn' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddCategory