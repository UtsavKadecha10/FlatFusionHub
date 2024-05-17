import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react'
import { useCookies } from "react-cookie";
import "../free-user/Login.css"
import "../free-user/dashboard.css"
import "../free-user/Layout.css"
import myImage from "../images/house1.jpg"
import logo from "../images/FFH1.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Selling = () => {
    const [userType, setUserType] = useState("");
    const [contact, setContact] = useState("");
    const [propertyDetail, setPropertyDetail] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [city, setCity] = useState("");
    const [locality, setLocality] = useState("");
    const [bhk, setBhk] = useState("");
    const [balconies, setBalconies] = useState("");
    const [totalFloor, setTotalFloor] = useState("");
    const [currentFloor, setCurrentFloor] = useState("");
    const [furnishedStatus, setFurnishedStatus] = useState("");
    const [superArea, setSuperArea] = useState("");
    const [carpetArea, setCarpetArea] = useState("");
    const [possesionStatus, setPossessionStatus] = useState("");
    const [expectedPrice, setExpectedPrice] = useState("");
    const [cookies, setCookie] = useCookies(['token']);
    const [msg, setMsg] = useState("");

    

    const handlePost = async (e) => {
        // Create an object with the user's input data
        e.preventDefault();

        try {
            // Make a POST request to your server with the user's data
            const response = await axios.post('http://localhost:3000/postProperty',{
                    userType,
                    contact,
                    propertyDetail,
                    propertyType,
                    city,
                    locality,
                    bhk,
                    balconies,
                    totalFloor,
                    currentFloor,
                    furnishedStatus,
                    superArea,
                    carpetArea,
                    possesionStatus,
                    expectedPrice
            });
            setMsg("Property posted successfully.");

        } catch (error) {
            // Handle any errors that occur during the request
            setMsg('Error posting property');
        }
    }
    const msgClass = (msg == "Error posting property") ? "messageNotSuccess" : "messageSuccess";

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


                <form onSubmit={handlePost} className="sellForm">
                    <div className="selling-div">

                        <div className='type_class'>
                            {/* <ion-icon name="medal-outline"></ion-icon> */}
                            <label>Type (tenant/buyer/owner)</label>
                            <input list='types' name="userType" value={userType} onChange={e => setUserType(e.target.value)} required />
                            <datalist id="types">
                                <option value="tenant" />
                                <option value="owner" />
                                <option value="buyer" />
                            </datalist>
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="call-outline"></ion-icon> */}
                            <label>Mobile</label>
                            <input type='number' name='contact' minLength={10} maxLength={10} value={contact} onChange={e => setContact(e.target.value)} required />

                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>Property Detail</label>
                            <input list='propDetails' name='propertyDetail' value={propertyDetail} onChange={e => setPropertyDetail(e.target.value)} required />
                            <datalist id="propDetails">
                                <option value="rent" />
                                <option value="sale" />
                            </datalist>
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>Property Type</label>
                            <input list='propTypes' name='propertyType' value={propertyType} onChange={e => setPropertyType(e.target.value)} required />
                            <datalist id="propTypes">
                                <option value="flat" />
                                <option value="apartment" />
                                <option value="other" />
                            </datalist>
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>City</label>
                            <input type='text' name='city' value={city} onChange={e => setCity(e.target.value)} required />
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>Locality</label>
                            <input type='text' name='locality' value={locality} onChange={e => setLocality(e.target.value)} required />
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>BHK</label>
                            <input type='number' name='bhk' value={bhk} onChange={e => setBhk(e.target.value)} required />
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>No. of balconies</label>
                            <input type='number' name='balconies' value={balconies} onChange={e => setBalconies(e.target.value)} required />
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>Total Floors</label>
                            <input type='number' name='totalFloor' value={totalFloor} onChange={e => setTotalFloor(e.target.value)} required />
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>Your Floor No.</label>
                            <input type='number' name='currentFloor' value={currentFloor} onChange={e => setCurrentFloor(e.target.value)} required />
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>Furnishing status</label>
                            <input type='text' name='furnishedStatus' value={furnishedStatus} onChange={e => setFurnishedStatus(e.target.value)} required />
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>Super Area(sq. m)</label>
                            <input type='number' name='superArea' value={superArea} onChange={e => setSuperArea(e.target.value)} required />
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>Carpet Area(sq. m)</label>
                            <input type='number' name='carpetArea' value={carpetArea} onChange={e => setCarpetArea(e.target.value)} required />
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>Possesion Status</label>
                            <input type='text' name='possessionStatus' value={possesionStatus} onChange={e => setPossessionStatus(e.target.value)} required />
                        </div>
                        <div className="inputbox" >
                            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                            <label>Expected Price(In lakhs)</label>
                            <input type='number' name='expectedPrice' value={expectedPrice} onChange={e => setExpectedPrice(e.target.value)} required />
                        </div>
                        <div className="btn">
                            <button type="submit">Post</button>
                        </div>
                        <div className={msgClass}>{msg}</div>
                    </div>
                </form>
            </header>
            <Outlet />
        </>
    )
}

export default Selling;
