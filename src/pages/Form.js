import React, { useState, useEffect } from "react";

export const Form = () => {
    useEffect(() => {
        fetch('https://7aamin.pythonanywhere.com/get/token')
        .then(response => response.json())
        .then(datas => {setToken(datas.token); console.log(datas)});
    }, []);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [token, setToken] = useState("");
    const sendData = () => {
        (async function() {
            let response = await fetch('https://7aamin.pythonanywhere.com/save/client_info', {
                method: "POST",
                body: JSON.stringify({
                    token: token,
                    name: name,
                    email: email,
                    phone: phone,
                    address: address
                }), headers: {"Content-type": "application/json; charset=UTF-8", "Authorization": token}
            }); let final = await response.json(); console.log(final);
        })();
    }
    return (
        <div>
            <div className="form-container">
                <div className="header-form">
                    <div className="title-container">
                    <h1 className="get-offer">Get my offer</h1>
                    <h1 className="today">Today!</h1>
                    </div>
                </div>
                <div className="form-body">
                    <div className="rows-form">
                        <p>Name & Lastname</p>
                        <input onChange={ev => setName(ev.target.value)} type="text" required/>
                    </div>
                    <div className="rows-form">
                        <p>E-mail</p>
                        <input onChange={ev => setEmail(ev.target.value)} type="email" required/>
                    </div>
                    <div className="rows-form">
                        <p>Phone number</p>
                        <input onChange={ev => setPhone(ev.target.value)} type="text" required/>
                    </div>
                    <div className="rows-form">
                        <p>Your property address</p>
                        <input onChange={ev => setAddress(ev.target.value)} type="text" required/>
                    </div>
                    <button id="button" onClick={sendData}>Submit</button>
                </div>
            </div>
        </div>
    );
}