import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

import './Predict.css';
import '../free-user/Login.css';
import axios from 'axios';
import { useCookies } from "react-cookie";
import logo from "../images/FFH1.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BuyPredict = () => {

  const [propertyBuildingStatus, setPropertyBuildingStatus] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyStatus, setPropertyStatus] = useState("");
  const [isFurnished, setIsFurnished] = useState(false);
  const [cityName, setCityName] = useState("");
  const [pricePerUnitArea, setPricePerUnitArea] = useState(0);
  const [bhkCount, setBhkCount] = useState(1);
  const [postedDaysCount, setPostedDaysCount] = useState(0);
  const [cookies, setCookie] = useCookies(['token']);

  const ppuaInc = () => {
    setPricePerUnitArea(pricePerUnitArea + 100);
  }
  const ppuaDec = () => {
    if (pricePerUnitArea > 50)
      setPricePerUnitArea(pricePerUnitArea - 50);
  }

  const bhkInc = () => {
    setBhkCount(bhkCount + 1);
  }
  const bhkDec = () => {
    if (bhkCount > 1)
      setBhkCount(bhkCount - 1);
  }

  const postedDaysCountInc = () => {
    setPostedDaysCount(postedDaysCount + 1);
  }
  const postedDaysCountDec = () => {
    if (postedDaysCount > 0)
      setPostedDaysCount(postedDaysCount - 1);
  }

const handleBuyPredict = async (e) => {
  e.preventDefault();
  const data = {
    propertyBuildingStatus,
    propertyType,
    propertyStatus,
    isFurnished,
    cityName,
    pricePerUnitArea,
    bhkCount,
    postedDaysCount
  }

  try {
    const response = await axios.post('http://localhost:3000/buyPredict', {
      headers: {
          'Authorization': `token ${cookies.token}`
      }
  }, data)

    console.log('buying prediction response : ' + response.data);
  } catch (error) {
    console.log('error : '+error);
  }

}


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
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Rent" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/budgetfriendly">Budget friendly</NavDropdown.Item>
                                    <NavDropdown.Item href="/furnishedhomes">Furnished Properties</NavDropdown.Item>
                                    <NavDropdown.Item href="/bachelorfriendly">Bachelor friendly</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/predict">
                                        Rent according to you preference
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Sell" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/selling">Post Property</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/selling">
                                        Predict Rate of your Property
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
      </header>

      <form className="table_container" onSubmit={handleBuyPredict}>
        <table className="customers">
          <tr className="table_header_label">
            <td>You can enter your requirements and we predict the best out of it!!</td>
          </tr>
          <tr>
            <td>Property Building Status</td>
          </tr>
          <tr>
            <td>
              <input type="text" value={propertyBuildingStatus} onChange={e => setPropertyBuildingStatus(e.target.value)} />

            </td>
          </tr>
          <tr>
            <td>Property types</td>
          </tr>
          <tr>
            <td>
              <input type="text" value={propertyType} onChange={e => setPropertyType(e.target.value)} />

            </td>
          </tr>
          <tr>
            <td>Property Status</td>
          </tr>
          <tr>
            <td>
              <input type="text" value={propertyStatus} onChange={e => setPropertyStatus(e.target.value)} />

            </td>
          </tr>
          <tr>
            <td>furnished or not</td>
          </tr>
          <tr>
            <td>
              <input type="text" value={isFurnished} onChange={e => setIsFurnished(e.target.value)} />

            </td>
          </tr>
          <tr>
            <td>City</td>

          </tr>
          <tr>
            <td>
              <input type="text" value={cityName} onChange={e => setCityName(e.target.value)} />

            </td>
          </tr>
          <tr>
            <td>Price per unit area</td>
          </tr>
          <tr>
            <td>
              <input type="number" value={pricePerUnitArea} onChange={e => setPricePerUnitArea(parseInt(e.target.value))} />
              <button className="table_btn" onClick={ppuaDec} >-</button>
              <button className="table_btn" onClick={ppuaInc} >+</button>
            </td>
          </tr>
          <tr>
            <td>BHK</td>
          </tr>
          <tr>
            <td>
              <input type="number" value={bhkCount} onChange={e => setBhkCount(parseInt(e.target.value))} />
              <button className="table_btn" onClick={bhkDec} >-</button>
              <button className="table_btn" onClick={bhkInc} >+</button>
            </td>
          </tr>
          <tr>
            <td>posted days count</td>
          </tr>
          <tr>
            <td>
              <input type="number" value={postedDaysCount} onChange={e => setPostedDaysCount(parseInt(e.target.value))} />
              <button className="table_btn" onClick={postedDaysCountDec} >-</button>
              <button className="table_btn" onClick={postedDaysCountInc} >+</button>
            </td>
          </tr>
          <tr>
            <td className='table_footer_label'>
              <button type="submit">Predict</button>
            </td>
          </tr>
        </table>
      </form>
    </>
  )
}

export default BuyPredict;
