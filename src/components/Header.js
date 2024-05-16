import { useState } from "react";
import { LOGO_LINK } from "../utils/constants";

const Header = () => {
    const[loginBtn, setLoginBtn] = useState('Login')

    return (
        <div className='header'>
            <img className="logo"  src={LOGO_LINK} />
            <div className='nav-list-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button className="loginBtn" onClick={() => { loginBtn ===  'Login'? setLoginBtn("Logout") : setLoginBtn("Login")}}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;