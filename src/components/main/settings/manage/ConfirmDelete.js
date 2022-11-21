import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { deleteCategory } from '../../../../api/categories'
import SettingLoading from '../SettingLoading'
import { useSelector } from 'react-redux'

const ConfirmDelete = ({setToggleDel, deleteId}) => {
  const queryClient = useQueryClient()
  const user = useSelector(state => state.user.user)
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }
  const sendDelete = useMutation(deleteCategory, {
    onSuccess: () => {
        queryClient.invalidateQueries()
    }
  })

  const handleDel = async (id) => {
    try {
        sendDelete.mutateAsync({id, config})
    } catch (error) {
        console.log(error)
    } finally {
        setToggleDel(false)
    }
  }

  let content
  if (sendDelete.status === 'loading') {
    content = <SettingLoading overlay={true} />
  } else if (sendDelete.status === 'error') {
    //
  } else {
    content = null
  }

  const handleBlur = (e) => {
    const currentTarget = e.currentTarget
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setToggleDel(false)
      }
    }, 0)
  }

  return (
    <div className='confirm-delete' onClick={handleBlur}>
        {content}
        <div className="delete-confirmation" tabIndex='1'>
            <p>Are you sure to delete category?</p>
            <div className='manange-category-btn-group'>
                <button className='btn btn-primary btn-sm' onClick={() => setToggleDel(false)}>Cancel</button>
                <button className='btn btn-primary-invert btn-sm' onClick={() => handleDel(deleteId)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmDelete