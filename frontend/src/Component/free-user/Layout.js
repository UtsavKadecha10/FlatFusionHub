import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import './dashboard.css';
import myImage from "../images/house1.jpg"
import logo from "../images/FFH1.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
const Layout = () => {

    //  useEffect(() => {
    //     axios.get('http://localhost:3000/buy', data)
    //         .then(response => {
    //             setStudents(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error retrieving users:', error);
    //         });
    // }, []);
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
                                        Buy according to you preference<br />
                                        <span style={{color : "grey", fontSize : "14px"}}>Coming Soon</span>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Rent" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/budgetfriendly">Budget friendly</NavDropdown.Item>
                                    <NavDropdown.Item href="/furnishedhomes">Furnished Properties</NavDropdown.Item>
                                    <NavDropdown.Item href="/bachelorfriendly">Bachelor friendly</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/predict">
                                        Rent according to you preference<br />
                                        <span style={{color : "grey", fontSize : "14px"}}>Coming Soon</span>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Sell" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/selling">Post Property</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/selling">
                                        Predict Rate of your Property<br />
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
                {/* <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button className="search_button">Search</Button>
                </Form> */}
                <span className="header_text">
                    Find a home that you always dreamt for!
                </span>
                <span className="explore_button">
                    <button><a href="#dashboard">Explore!</a></button>
                </span>
            </header>
            <Outlet />
            <div className="dashboard-links" id="dashboard">
                <div className="dashboard-links-div1">
                    <img src={myImage} alt="some_image" style={{ width: "100%" }} />
                    <div style={{ textAlign: "center" }}>
                        <p>This is some text</p>
                        <p>This is some text</p>
                    </div>
                </div>
                <div className="dashboard-links-div2">
                    <img src={myImage} alt="some_image" style={{ width: "100%" }} />
                    <div style={{ textAlign: "center" }}>
                        <p>This is some text</p>
                        <p>This is some text</p>
                    </div>
                </div>
                <div className="dashboard-links-div3">
                    <img src={myImage} alt="some_image" style={{ width: "100%" }} />
                    <div style={{ textAlign: "center" }}>
                        <p>This is some text</p>
                        <p>This is some text</p>
                    </div>
                </div>
                <div className="dashboard-links-div4">
                    <img src={myImage} alt="some_image" style={{ width: "100%" }} />
                    <div style={{ textAlign: "center" }}>
                        <p>This is some text</p>
                        <p>This is some text</p>
                    </div>
                </div>
                <div className="dashboard-links-div5">
                    <img src={myImage} alt="some_image" style={{ width: "100%" }} />
                    <div style={{ textAlign: "center" }}>
                        <p>This is some text</p>
                        <p>This is some text</p>
                    </div>
                </div>
                <div className="dashboard-links-div6">
                    <img src={myImage} alt="some_image" style={{ width: "100%" }} />
                    <div style={{ textAlign: "center" }}>
                        <p>This is some text</p>
                        <p>This is some text</p>
                    </div>
                </div>
                <div className="dashboard-links-div7">
                    <img src={myImage} alt="some_image" style={{ width: "100%" }} />
                    <div style={{ textAlign: "center" }}>
                        <p>This is some text</p>
                        <p>This is some text</p>
                    </div>
                </div>
                <div className="dashboard-links-div8">
                    <img src={myImage} alt="some_image" style={{ width: "100%" }} />
                    <div style={{ textAlign: "center" }}>
                        <p>This is some text</p>
                        <p>This is some text</p>
                    </div>
                </div>
                <div className="dashboard-links-div9">
                    <img src={myImage} alt="some_image" style={{ width: "100%" }} />
                    <div style={{ textAlign: "center" }}>
                        <p>This is some text</p>
                        <p>This is some text</p>
                    </div>
                </div>
                <div className="dashboard-links-div10">
                    <img src={myImage} alt="some_image" style={{ width: "100%" }} />
                    <div style={{ textAlign: "center" }}>
                        <p>This is some text</p>
                        <p>This is some text</p>
                    </div>
                </div>
               

            </div>

            {/* <div className="flatfusionhub">
                <div className="flat"><h3>&#9733;</h3></div>
                <div className="fusion"><h3>Flat Fusion Hub</h3></div>
                <div className="hub"><h3>&#9733;</h3></div>
            </div> */}

            <div className="content">

                <div className="container">
                    <div>
                        <span>Top Properties</span>
                        <div>
                            <div>
                                <div className="container-img"><img src={myImage} /></div>
                                <div className="container-text">
                                    <h3>Global Celesta</h3>
                                    <p>Global Edifice Builders</p>
                                    <p>Las Vegas</p>
                                    <p>2 BHK Flats</p>
                                    <h4>&#8377; 40.8 Lac</h4><span> &nbsp; onwards</span>
                                    <p>Marketed By Global Edifice Builders</p>
                                </div>
                            </div>
                            <div>
                                <div className="container-img"><img src={myImage} /></div>
                                <div className="container-text">
                                    <h3>Global Celesta</h3>
                                    <p>Global Edifice Builders</p>
                                    <p>Las Vegas</p>
                                    <p>2 BHK Flats</p>
                                    <h4>&#8377; 40.8 Lac</h4><span> &nbsp; onwards</span>
                                    <p>Marketed By Global Edifice Builders</p>
                                </div>
                            </div>
                            <div>
                                <div className="container-img"><img src={myImage} /></div>
                                <div className="container-text">
                                    <h3>Global Celesta</h3>
                                    <p>Global Edifice Builders</p>
                                    <p>Las Vegas</p>
                                    <p>2 BHK Flats</p>
                                    <h4>&#8377; 40.8 Lac</h4><span> &nbsp; onwards</span>
                                    <p>Marketed By Global Edifice Builders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>Top Properties</span>
                        <div>
                            <div>
                                <div className="container-img"><img src={myImage} /></div>
                                <div className="container-text">
                                    <h3>Global Celesta</h3>
                                    <p>Global Edifice Builders</p>
                                    <p>Las Vegas</p>
                                    <p>2 BHK Flats</p>
                                    <h4>&#8377; 40.8 Lac</h4><span> &nbsp; onwards</span>
                                    <p>Marketed By Global Edifice Builders</p>
                                </div>
                            </div>
                            <div>
                                <div className="container-img"><img src={myImage} /></div>
                                <div className="container-text">
                                    <h3>Global Celesta</h3>
                                    <p>Global Edifice Builders</p>
                                    <p>Las Vegas</p>
                                    <p>2 BHK Flats</p>
                                    <h4>&#8377; 40.8 Lac</h4><span> &nbsp; onwards</span>
                                    <p>Marketed By Global Edifice Builders</p>
                                </div>
                            </div>
                            <div>
                                <div className="container-img"><img src={myImage} /></div>
                                <div className="container-text">
                                    <h3>Global Celesta</h3>
                                    <p>Global Edifice Builders</p>
                                    <p>Las Vegas</p>
                                    <p>2 BHK Flats</p>
                                    <h4>&#8377; 40.8 Lac</h4><span> &nbsp; onwards</span>
                                    <p>Marketed By Global Edifice Builders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>Top Properties</span>
                        <div>
                            <div>
                                <div className="container-img"><img src={myImage} /></div>
                                <div className="container-text">
                                    <h3>Global Celesta</h3>
                                    <p>Global Edifice Builders</p>
                                    <p>Las Vegas</p>
                                    <p>2 BHK Flats</p>
                                    <h4>&#8377; 40.8 Lac</h4><span> &nbsp; onwards</span>
                                    <p>Marketed By Global Edifice Builders</p>
                                </div>
                            </div>
                            <div>
                                <div className="container-img"><img src={myImage} /></div>
                                <div className="container-text">
                                    <h3>Global Celesta</h3>
                                    <p>Global Edifice Builders</p>
                                    <p>Las Vegas</p>
                                    <p>2 BHK Flats</p>
                                    <h4>&#8377; 40.8 Lac</h4><span> &nbsp; onwards</span>
                                    <p>Marketed By Global Edifice Builders</p>
                                </div>
                            </div>
                            <div>
                                <div className="container-img"><img src={myImage} /></div>
                                <div className="container-text">
                                    <h3>Global Celesta</h3>
                                    <p>Global Edifice Builders</p>
                                    <p>Las Vegas</p>
                                    <p>2 BHK Flats</p>
                                    <h4>&#8377; 40.8 Lac</h4><span> &nbsp; onwards</span>
                                    <p>Marketed By Global Edifice Builders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>Top Properties</span>
                        <div>
                            <div>
                                <div className="container-img"><img src={myImage} /></div>
                                <div className="container-text">
                                    <h3>Global Celesta</h3>
                                    <p>Global Edifice Builders</p>
                                    <p>Las Vegas</p>
                                    <p>2 BHK Flats</p>
                                    <h4>&#8377; 40.8 Lac</h4><span> &nbsp; onwards</span>
                                    <p>Marketed By Global Edifice Builders</p>
                                </div>
                            </div>
                            <div>
                                <div className="container-img"><img src={myImage} /></div>
                                <div className="container-text">
                                    <h3>Global Celesta</h3>
                                    <p>Global Edifice Builders</p>
                                    <p>Las Vegas</p>
                                    <p>2 BHK Flats</p>
                                    <h4>&#8377; 40.8 Lac</h4><span> &nbsp; onwards</span>
                                    <p>Marketed By Global Edifice Builders</p>
                                </div>
                            </div>
                            <div>
                                <div className="container-img"><img src={myImage} /></div>
                                <div className="container-text">
                                    <h3>Global Celesta</h3>
                                    <p>Global Edifice Builders</p>
                                    <p>Las Vegas</p>
                                    <p>2 BHK Flats</p>
                                    <h4>&#8377; 40.8 Lac</h4><span> &nbsp; onwards</span>
                                    <p>Marketed By Global Edifice Builders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-container">
                    <div>
                        <div className="side-img"></div>
                        <div className="side-container-text">
                            <p>3 BHK Flat</p> <p>(Ready to move)</p> <br />
                            <h5>&#8377; 80,000</h5> <br />
                            <p>Sitapura, Jaipur</p> <br />
                        </div>
                    </div>
                    <div>
                        <div className="side-img"></div>
                        <div className="side-container-text">
                            <p>3 BHK Flat</p> <p>(Ready to move)</p> <br />
                            <h5>&#8377; 80,000</h5> <br />
                            <p>Sitapura, Jaipur</p> <br />
                        </div>
                    </div>
                    <div>
                        <div className="side-img"></div>
                        <div className="side-container-text">
                            <p>3 BHK Flat</p> <p>(Ready to move)</p> <br />
                            <h5>&#8377; 80,000</h5> <br />
                            <p>Sitapura, Jaipur</p> <br />
                        </div>
                    </div>
                    <div>
                        <div className="side-img"></div>
                        <div className="side-container-text">
                            <p>3 BHK Flat</p> <p>(Ready to move)</p> <br />
                            <h5>&#8377; 80,000</h5> <br />
                            <p>Sitapura, Jaipur</p> <br />
                        </div>
                    </div>
                    <div>
                        <div className="side-img"></div>
                        <div className="side-container-text">
                            <p>3 BHK Flat</p> <p>(Ready to move)</p> <br />
                            <h5>&#8377; 80,000</h5> <br />
                            <p>Sitapura, Jaipur</p> <br />
                        </div>
                    </div>
                    <div>
                        <div className="side-img"></div>
                        <div className="side-container-text">
                            <p>3 BHK Flat</p> <p>(Ready to move)</p> <br />
                            <h5>&#8377; 80,000</h5> <br />
                            <p>Sitapura, Jaipur</p> <br />
                        </div>
                    </div>
                    <div>
                        <div className="side-img"></div>
                        <div className="side-container-text">
                            <p>3 BHK Flat</p> <p>(Ready to move)</p> <br />
                            <h5>&#8377; 80,000</h5> <br />
                            <p>Sitapura, Jaipur</p> <br />
                        </div>
                    </div>
                    
                
                </div>
            </div>
            {/* <div className="footer">
                <div>footer1</div>
                <div>footer2</div>
                <div>footer3</div>
            </div> */}
        </>
    )
}

export default Layout;
