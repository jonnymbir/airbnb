import { faBars, faCircleUser, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Header.css"
import HeaderSeacrh from './HeaderSeacrh'

const Header = () => {
  return (
    <div className='header'>
    <div className="headerWrapper">
        <div className="headerLeft">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" className="leftLogo" />
        </div>
        <div className="headerMiddle">
            <HeaderSeacrh/>
        </div>
        <div className="headerRight">
            <a className="backgroundHover">
                <div>Become a Host</div>
            </a>
            <span className="backgroundHover"><FontAwesomeIcon icon={faGlobe} /></span>
            <div className="headerProfile">
                <FontAwesomeIcon icon={faBars}/>
                <FontAwesomeIcon icon={faCircleUser} className="headerCircleUser"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header