import '../scss/app.scss'
import logoImage from '../resources/images/Report Now-logos_transparent.png'

const Header = () => {
  return (
    <div className='header-content'>
      <img
        className='header-content__logo'
        src={logoImage}
        alt='Italian Trulli'
      />
      <div className='header-content__menu'>
        <a className='header-content__menu__links' href='url'>
          Expense Report
        </a>
        <a className='header-content__menu__links' href='url'>
          About us
        </a>
        <a className='header-content__menu__links' href='url'>
          Contact us
        </a>
      </div>
    </div>
  )
}

export default Header
