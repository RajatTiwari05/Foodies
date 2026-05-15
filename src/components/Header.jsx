import logo from '../assets/images/foodie-friendly-logo.png';
const HeaderComponent = () => {
    return (
      <div className = "header">
        <div className='headerLogo'>
          <span className="header-logo-wrap">
            <img src={logo} alt="Foodie Friendly" className="header-logo" />
          </span>
          <h1 className='header-title'>Foodie</h1>
        </div>
        <div className='navItems'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    )
  }

export default HeaderComponent;