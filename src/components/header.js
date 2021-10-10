import "../styles/header.css";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" onClick={() => {window.location.href="/"}}>
                <p className="header-link" style={window.location.pathname === '/' ? {display: "none"} : {display: "block"}}>
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292894 7.70711C-0.0976312 7.31658 -0.0976312 6.68342 0.292894 6.29289L6.29289 0.292894C6.68342 -0.0976312 7.31658 -0.0976312 7.70711 0.292894C8.09763 0.683418 8.09763 1.31658 7.70711 1.70711L3.41421 6H15C15.5523 6 16 6.44772 16 7C16 7.55229 15.5523 8 15 8L3.41421 8L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071Z" fill="#B45309"/>
                    </svg>
                </p>
            </Link>
            <div  className="header-title">
                <p>CHUCK NORRIS</p>
            </div>
        </div>
    );
}

export default Header;