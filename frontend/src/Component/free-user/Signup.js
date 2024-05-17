import React from 'react'
import { useState } from "react";
import axios from 'axios';
import './Login.css';
import './Layout.css';
import logo from "../images/FFH1.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [type, setType] = useState("");
    const [msg, setMsg] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post('http://localhost:3000/users', {
                type,
                name,
                email,
                password,
                mobile
            });
            setMsg("Registration successfully.");
        } catch (error) {
            setMsg("Unable to register user.");
        }
    }
    const msgClass = (msg == "Unable to register user.") ? "messageNotSuccess" : "messageSuccess";


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
                <form onSubmit={handleRegister} >
                {/* <h2>Signup</h2> */}
                <div className="login-div">

                    <div className='type_class'>
                        <ion-icon name="medal-outline"></ion-icon>
                        <label>Type (tenant/buyer/owner)</label>
                        <input list='types' name="type" value={type} onChange={e => setType(e.target.value)} required />
                        <datalist id="types">
                            <option value="tenant" />
                            <option value="owner" />
                            <option value="buyer" />
                        </datalist>
                    </div>
                    <div className='inputbox'>
                        <ion-icon name="person-outline"></ion-icon>
                        <label>Name</label>
                        <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className="inputbox" >
                        <ion-icon name="mail-outline"></ion-icon>
                        <label>Email</label>
                        <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="inputbox" >
                        <ion-icon name="call-outline"></ion-icon>
                        <label>Mobile</label>
                        <input type='number' name='mobile' minLength={10} maxLength={10} value={mobile} onChange={e => setMobile(e.target.value)} required />
                    </div>
                    <div className="inputbox" >
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <label>Password</label>
                        <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <div className="forget">
                        <label><input type="checkbox" />Remember Me</label>
                    </div>
                    <div className="btn">

                        <button type="submit">Signup</button>
                    </div>
                    <div className="register">
                        <p>Already have an account <a href="#" target="_blank"><Link to={"/login"} >Login</Link></a></p>
                    </div>
                    <div className={msgClass}>{msg}</div>
                </div>
            </form>
            </header>
            
        </>
    )
}


export default Signup;
