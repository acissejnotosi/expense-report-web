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
    </div>
  )
}

export default Header
