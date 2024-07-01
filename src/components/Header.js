import { useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const[loginBtn, setLoginBtn] = useState('Login')

    const onlineStatus = useOnlineStatus()
    console.log(onlineStatus)

    return (
        <div className='header'>
            <img className="logo"  src={LOGO_LINK} />
            <div className='nav-list-items'>
                <ul>
                    <li><Link to='/online Status' style={{textDecoration: 'none'}}>Online Status: {onlineStatus === true ? "✅" : "🔴"}</Link></li>
                    <li><Link to='/' style={{textDecoration: 'none'}}>Home</Link></li>
                    <li><Link to='/about us' style={{textDecoration: 'none'}}>About Us</Link></li>
                    <li><Link to='/contact us' style={{textDecoration: 'none'}}>Contact Us</Link></li>
                    <li><Link to='/grocery' style={{textDecoration: 'none'}}>Grocery</Link></li>
                    <li>Cart</li>
                    <button className="loginBtn" onClick={() => { loginBtn ===  'Login'? setLoginBtn("Logout") : setLoginBtn("Login")}}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;