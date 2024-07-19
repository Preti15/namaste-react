import { useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const[loginBtn, setLoginBtn] = useState('Login')

    const onlineStatus = useOnlineStatus()
    console.log(onlineStatus)

    return (
        <div className='flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-200 lg:bg-green-200'>
            <div>
                <img className="w-32"  src={LOGO_LINK} />
            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4">
                    <li className="px-4"><Link to='/online Status' style={{textDecoration: 'none'}}>Online Status: {onlineStatus === true ? "✅" : "🔴"}</Link></li>
                    <li className="px-4"><Link to='/' style={{textDecoration: 'none'}}>Home</Link></li>
                    <li className="px-4"><Link to='/about us' style={{textDecoration: 'none'}}>About Us</Link></li>
                    <li className="px-4"><Link to='/contact us' style={{textDecoration: 'none'}}>Contact Us</Link></li>
                    <li className="px-4"><Link to='/grocery' style={{textDecoration: 'none'}}>Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="px-4" onClick={() => { loginBtn ===  'Login'? setLoginBtn("Logout") : setLoginBtn("Login")}}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;