import React from "react";

export const Header = (props) => {
    const [header, setHeader] = React.useState("");
    React.useEffect(() => setHeader("Home"), []);
    return (
        <header>
            <img src={require('../images/logo.png')}/>
            <i className="fas fa-ellipsis-v menuIcon"></i>
            <ul>
                <li onClick={() => setHeader("Home")} style={{borderBottom:`4px solid rgba(0, 140, 255, ${header === "Home" ? 1 : 0})`, color:`${header === "Home" ? "#29A8DF" : "rgb(82, 82, 82)"}`}}>Home</li>
                <li onClick={() => setHeader("About")} style={{borderBottom:`4px solid rgba(0, 140, 255, ${header === "About" ? 1 : 0})`, color:`${header === "About" ? "#29A8DF" : "rgb(82, 82, 82)"}`}}>About</li>
                <li onClick={() => setHeader("Contact")} style={{borderBottom:`4px solid rgba(0, 140, 255, ${header === "Contact" ? 1 : 0})`, color:`${header === "Contact" ? "#29A8DF" : "rgb(82, 82, 82)"}`}}>Contact</li>
            </ul>
      </header>
    );
}