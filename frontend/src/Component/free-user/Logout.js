import React from 'react';
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import './Login.css';
import './Layout.css';
import { Outlet, Link } from "react-router-dom";

const Logout = () => {

    const [cookies, setCookie] = useCookies(['token']);

    useEffect(() => {
        let expires = new Date()
        setCookie('token', '', { path: '/', expires })
    }, []);
    return (
        <>
            <header>
                <div className="headerLinks">

                    <div>
                        <a href="#" target="_blank"><Link to={"/"} >Dashboard</Link></a>
                    </div>

                    <div className="dropdown">
                        <a href="#" target="_blank"><Link className="dropbtn" to={"/"} ><ion-icon id='navicon4' name="reorder-three-outline"></ion-icon></Link></a>
                        <div className="dropdown-content-login" style={{backgroundColor : "#999"}}>
                            <a href="#" target="_blank"><Link to={"/login"} >login</Link></a>
                            <a href="#" target="_blank"><Link to={"/signup"} >signup</Link></a>
                            <a href="#" target="_blank"><Link to={"/logout"} >logout</Link></a>

                        </div>
                    </div>

                </div>
            </header>
            <form>

{/* <<<<<<< HEAD:frontend/src/Component/free-user/Logout.js
                <h2>Logout</h2>
=======
                    <h2>Logout</h2>
>>>>>>> c50d677d5662382e9890f0b94b04423f11c33d57:frontend/src/Component/Logout.js
                <div className="login-div">

                    <div className="btn">
                        <h3>User Logout Successfully</h3>
                    </div>
                    <div className="register">
                        <p>Create an account <a href="#" target="_blank"><Link to={"/signup"} >signup</Link></a></p>
                    </div>
                </div> */}
            </form>
        </>
    )
}

export default Logout;