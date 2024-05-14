import { LOGO_LINK } from "../utils/constants";

const Header = () => {
    return (
        <div className='header'>
            <img className="logo"  src={LOGO_LINK} />
            <div className='nav-list-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;