// Write your code here
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div>
    <div>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt=" website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button type="button" data-testid="hamburgerIconButton">
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div>
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul>
              <li>
                <Link to="/" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => close()}>
                  <BsInfoCircleFill size="32" />
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
