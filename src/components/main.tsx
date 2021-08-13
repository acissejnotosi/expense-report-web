import React from 'react'
import '../scss/app.scss'
import Bar from './bar'
import Footer from './footer'
import Header from './header'
import Table from './table'

const Main = () => {
  return (
    <div className='wrapper'>
      <div className='wrapper--box wrapper__header'>
        <Header />
      </div>
      {/* <div className='box sidebar'>Sidebar</div> */}
      <div className='wrapper--box wrapper__bar'>
        <Bar />
      </div>
      <div className='wrapper--box wrapper__content'>
        <Table />
      </div>
      <div className='wrapper--box wrapper__footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Main
