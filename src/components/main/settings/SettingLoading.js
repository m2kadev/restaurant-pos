import React from 'react'

const SettingLoading = ({overlay}) => {
  return (
    <div className={overlay ? 'loading-wrapper-overlay': 'loading-wrapper'}>
        <img src='./images/spinner.svg' alt="loading" />
    </div>
  )
}

export default SettingLoading
