import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios';
import logo from "../images/FFH1.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Login.css';
import './Layout.css';
import { Outlet, Link } from "react-router-dom";

const Login = () => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookies] = useCookies(['token']);
    const [msg, setMsg] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post('http://localhost:3000/login', {
                email,
                password
            })
                .then(resp => {
                    setMsg("Login successfully.");
                    let expires = new Date()
                    expires.setTime(expires.getTime() + (1000 * 60 * 60))
                    setCookies('token', resp.data.token, { path: '/', expires })
                })
                .catch(error => {
                    setMsg("Invalid email or password");
                });

        } catch (error) {
            setMsg("unable to login the user")
        }

    }

    const msgClass = (msg == "Login successfully.") ? "messageSuccess" : "messageNotSuccess";

    return (
        <>
            <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand href="/"><img src={logo} className="nav_logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Buy" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/budgethomes">Budget friendly homes</NavDropdown.Item>
                                    <NavDropdown.Item href="/furnishedproperty">Furnished Properties</NavDropdown.Item>
                                    <NavDropdown.Item href="/premiumhomes">Premium Homes</NavDropdown.Item>
                                    <NavDropdown.Item href="/readytomove">Ready to Move</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/buypredict">
                                        Buy according to you preference
                                        <br />
                                        <span style={{color : "grey", fontSize : "14px"}}>Coming Soon</span>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Rent" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/budgetfriendly">Budget friendly</NavDropdown.Item>
                                    <NavDropdown.Item href="/furnishedhomes">Furnished Properties</NavDropdown.Item>
                                    <NavDropdown.Item href="/bachelorfriendly">Bachelor friendly</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/predict">
                                        Rent according to you preference
                                        <br />
                                        <span style={{color : "grey", fontSize : "14px"}}>Coming Soon</span>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Sell" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/selling">Post Property</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/selling">
                                        Predict Rate of your Property
                                        <br />
                                        <span style={{color : "grey", fontSize : "14px"}}>Coming Soon</span>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <div className="log">
                                    <Nav.Link href="/login" className="login_button">Login</Nav.Link>
                                </div>
                                <div className="sign">
                                    <Nav.Link href="/signup" className="signup_button">SignUp</Nav.Link>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <form onSubmit={handleLogin}>

                    {/* <h2>Login</h2> */}

                    <div className="login-div">
                        <div className="inputbox" >
                            <ion-icon name="mail-outline"></ion-icon>
                            <label>Email</label>
                            <input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div className="inputbox" >
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <label>Password</label>
                            <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <div className="forget">
                            <label><input type="checkbox" />Remember Me <a href="#">Forget Password</a></label>
                        </div>
                        <div className="btn">

                            <button type="submit">Login</button>
                        </div>
                        <div className="register">
                            <p>Don't have an account <a href="#" target="_blank"><Link to={"/signup"} >signup</Link></a></p>
                        </div>
                        <div className={msgClass}>{msg}</div>

                    </div>
                </form>
            </header>

        </>
    )
}


export default Login;
