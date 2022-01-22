import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
    const navigate = useNavigate();
    const [header, setHeader] = React.useState("Home");
    const [menu, setMenu] = useState(false);

    return (
        <header>
            <img src={require('../images/logo.png')}/>
            <i className="fas fa-bars menuIcon" onClick={() => setMenu(!menu)}></i>
            <ul className={menu ? "menu2 animationIn" : "menu2 animationOut"}>
                <li onClick={() => {setHeader("Home"); setMenu(false); navigate('/')}}>Home</li>
                <li onClick={() => {setHeader("About"); setMenu(false); navigate('/about')}}>About</li>
                <li onClick={() => {setHeader("Service"); setMenu(false); navigate('/service')}}>Service</li>
                <li onClick={() => {setHeader("Reviews"); setMenu(false); navigate('reviews')}}>Reviews</li>
            </ul>
            <ul className="menu1">
                <li onClick={() => {setHeader("Home"); navigate('/')}} style={{borderBottom:`1px solid rgba(0, 140, 255, ${header === "Home" ? 1 : 0})`, color:`${header === "Home" ? "#29A8DF" : "rgb(82, 82, 82)"}`}}>Home</li>
                <li onClick={() => {setHeader("About"); navigate('/about')}} style={{borderBottom:`1px solid rgba(0, 140, 255, ${header === "About" ? 1 : 0})`, color:`${header === "About" ? "#29A8DF" : "rgb(82, 82, 82)"}`}}>About</li>
                <li onClick={() => {setHeader("Service"); navigate('/service')}} style={{borderBottom:`4px solid rgba(0, 140, 255, ${header === "Service" ? 1 : 0})`, color:`${header === "Service" ? "#29A8DF" : "rgb(82, 82, 82)"}`}}>Service</li>
                <li onClick={() => {setHeader("Reviews"); navigate('reviews')}} style={{borderBottom:`1px solid rgba(0, 140, 255, ${header === "Reviews" ? 1 : 0})`, color:`${header === "Reviews" ? "#29A8DF" : "rgb(82, 82, 82)"}`}}>Reviews</li>
            </ul>
            <h1 style={{display:"none"}}>We buy houses in every state</h1>
            <h2 style={{display:"none"}}>We buy houses in every state</h2>
      </header>
    );
}