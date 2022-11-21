import React from 'react'
import { settings } from '../../../settingDatas'

const SettingItems = ({setChildIndex, childIndex}) => {

  const handleChildIndex = (index) => {
    console.log(index)
    setChildIndex(index)
  }

  return (
    <div className='settings'>
        {
            settings.map((setting, i) => (
                <div onClick={() => handleChildIndex(i)} key={setting.title} className={i === childIndex ? 'setting-datas setting-active': 'setting-datas'}>
                    <div className="setting-icon">
                        <img src={setting.img} alt={setting.title} />
                    </div>
                    <div className="setting-title">
                        <p className="s-name">{setting.title}</p>
                        <div className="s-info">{setting.info}</div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default SettingItems