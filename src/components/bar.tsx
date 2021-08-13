import React from 'react'
import '../scss/app.scss'

const Bar = () => {
  return (
    <div className='bar-content'>
      <span className='bar-content__span'>User Name</span>
      Period:
      <input className='bar-content__period' />
      To:
      <input className='bar-content__to' />
    </div>
  )
}

export default Bar
