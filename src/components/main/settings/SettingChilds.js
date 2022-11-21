import React from 'react'
import { settings } from '../../../settingDatas'

const SettingChilds = ({ childIndex }) => {
  return (
    <div className='setting-childs'>
        {
            settings[childIndex]?.element
        }
    </div>
  )
}

export default SettingChilds