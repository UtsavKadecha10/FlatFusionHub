import { Outlet, Link } from "react-router-dom";
import "../free-user/Login.css"
import "../free-user/dashboard.css"
import "../free-user/Layout.css"
import myImage from "../images/house1.jpg"
import logo from "../images/FFH1.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const BudgetHomes = () => {



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
                <div className="content">

                    <div className="container">
                        <div>
                            <span>Budget friendly homes</span>
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
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default BudgetHomes;
