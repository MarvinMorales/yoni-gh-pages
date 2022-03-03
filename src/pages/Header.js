import React, {useState} from "react";
import { Link, NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
    const navigate = useNavigate();
    const [header, setHeader] = React.useState("");
    const [menu, setMenu] = useState(false);

    return (
        <header>
           
            <Link to={"/"} className="brand_logo">
            <img src={require('../images/logo.png')} />
            </Link>
            <div className="nav_wrap">
            <i className="fas fa-bars menuIcon" onClick={() => setMenu(!menu)}></i>
            <ul className={menu ? "menu2 animationIn" : "menu2 animationOut"}>
            <li onClick={() => {setMenu(false);}}><NavLink to={'/'} className="header-nav__nav-link">Home</NavLink></li>
            <li onClick={() => {setMenu(false);}}><NavLink to={'/about'} className="header-nav__nav-link">About</NavLink></li>
            <li onClick={() => {setMenu(false);}}><NavLink to={'/service'} className="header-nav__nav-link">Service</NavLink></li>
            <li onClick={() => {setMenu(false);}}><NavLink to={'/reviews'} className="header-nav__nav-link">Reviews</NavLink></li>
            <li onClick={() => {setMenu(false);}}><NavLink to={'/locations'} className="header-nav__nav-link">Locations</NavLink></li>
            <li onClick={() => {setMenu(false);}}><NavLink to={'/blogs'} className="header-nav__nav-link">Blogs</NavLink></li>
            <li onClick={() => {setMenu(false);}}><a href="tel:9493255813" className="call_button">Call: 9493255813</a></li>

            </ul>
            <ul className="menu1">
            <li><NavLink to={'/'} className="header-nav__nav-link">Home</NavLink></li>
            <li><NavLink to={'/about'} className="header-nav__nav-link">About</NavLink></li>
            <li><NavLink to={'/service'} className="header-nav__nav-link">Service</NavLink></li>
            <li><NavLink to={'/reviews'} className="header-nav__nav-link">Reviews</NavLink></li>
            <li><NavLink to={'/locations'} className="header-nav__nav-link">Locations</NavLink></li>
            <li><NavLink to={'/blogs'} className="header-nav__nav-link">Blogs</NavLink></li>
            <li><a href="tel:9493255813" className="call_button">Call: 9493255813</a></li>
            </ul>
            </div>
            <h1 style={{display:"none"}}>We buy houses in every state</h1>
            <h2 style={{display:"none"}}>We buy houses in every state</h2>
      </header>
    );
}