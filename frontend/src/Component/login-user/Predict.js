import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

import './Predict.css';
import '../free-user/Login.css';


import logo from "../images/FFH1.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import { useCookies } from "react-cookie";
const Predict = () => {

  const [bedroomCount, setBedroomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [areaCount, setAreaCount] = useState(400);
  const [furnishingCount, setFurnishingCount] = useState(0);
  const [monthCount, setMonthCount] = useState(1);
  const [floorCount, setFloorCount] = useState(0);
  const [parking, setParking] = useState(0);
  const [brokAmount, setBrokAmount] = useState(0);
  const [cookies, setCookie] = useCookies(['token']);



  const bedroomInc = () => {
    setBedroomCount(bedroomCount + 1);
  }
  const bedroomDec = () => {
    if (bedroomCount > 1)
      setBedroomCount(bedroomCount - 1);
  }

  const bathroomInc = () => {
    setBathroomCount(bathroomCount + 1);
  }
  const bathroomDec = () => {
    if (bathroomCount > 1)
      setBathroomCount(bathroomCount - 1);
  }

  const areaCountInc = () => {
    setAreaCount(areaCount + 100);
  }
  const areaCountDec = () => {
    if (areaCount > 50)
      setAreaCount(areaCount - 50);
  }

  const furnishingCountInc = () => {
    if (furnishingCount < 2)
      setFurnishingCount(furnishingCount + 1);
  }
  const furnishingCountDec = () => {
    if (furnishingCount >= 1)
      setFurnishingCount(furnishingCount - 1);
  }

  const monthCountInc = () => {
    if (monthCount < 12)
      setMonthCount(monthCount + 1);
  }
  const monthCountDec = () => {
    if (monthCount > 1)
      setMonthCount(monthCount - 1);
  }

  const floorCountInc = () => {
    setFloorCount(floorCount + 1);
  }
  const floorCountDec = () => {
    if (floorCount > 1)
      setFloorCount(floorCount - 1);
  }

  const parkingInc = () => {
    if (parking < 1)
      setParking(parking + 1);
  }
  const parkingDec = () => {
    if (parking > 0)
      setParking(parking - 1);
  }

  const handlePredict = async (e) => {
    // Create an object with the user's input data
    e.preventDefault();
    const data = {
      bedroomCount,
      bathroomCount,
      areaCount,
      furnishingCount,
      monthCount,
      floorCount,
      parking,
      brokAmount,
    };

    try {
      // Make a POST request to your server with the user's data
      const response = await axios.post('http://localhost:3000/rentPredict', {
        headers: {
            'Authorization': `token ${cookies.token}`
        }
    }, data);

      // Handle the response here, you can display a message to the user
      console.log('Prediction response ', response.data);
      console.log("react")
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
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
                                    <NavDropdown.Item href="#action3">Budget friendly homes</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Furnished Properties</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Premium Homes</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Ready to Move</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/buypredict">
                                        Buy according to you preference
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Rent" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action3">Budget friendly</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Furnished Properties</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Bachelor friendly</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/predict">
                                        Rent according to you preference
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Sell" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action3">Post Property</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action8">
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
        <form className="table_container" onSubmit={e => handlePredict(e)}>
        <table className="customers">
          <tr className="table_header_label">
            <td>You can enter your requirements and we predict the best out of it!!</td>
          </tr>
          <tr>
            <td>Number of Bedrooms</td>
          </tr>
          <tr>
            <td>
              <input type="number" value={bedroomCount} onChange={e => setBedroomCount(parseInt(e.target.value))} />
              <button className="table_btn" onClick={bedroomDec}>-</button>
              <button className="table_btn" onClick={bedroomInc}>+</button>
            </td>
          </tr>
          <tr>
            <td>Number of Bathrooms</td>
          </tr>
          <tr>
            <td>
              <input type="number" value={bathroomCount} onChange={e => setBathroomCount(parseInt(e.target.value))} />
              <button className="table_btn" onClick={bathroomDec}>-</button>
              <button className="table_btn" onClick={bathroomInc}>+</button>
            </td>
          </tr>
          <tr>
            <td>Area(square-foot)</td>
          </tr>
          <tr>
            <td>
              <input type="number" value={areaCount} onChange={e => setAreaCount(parseInt(e.target.value))} />
              <button className="table_btn" onClick={areaCountDec}>-</button>
              <button className="table_btn" onClick={areaCountInc}>+</button>
            </td>
          </tr>
          <tr>
            <td>Furnishing(0; unfurnished, 1:semi-furnished,2:fully furnished)</td>
          </tr>
          <tr>
            <td>
              <input type="number" value={furnishingCount} onChange={e => setFurnishingCount(parseInt(e.target.value))} />
              <button className="table_btn" onClick={furnishingCountDec}>-</button>
              <button className="table_btn" onClick={furnishingCountInc}>+</button>
            </td>
          </tr>
          <tr>
            <td>Available for (months)</td>

          </tr>
          <tr>
            <td>
              <input type="number" value={monthCount} onChange={e => setMonthCount(parseInt(e.target.value))} />
              <button className="table_btn" onClick={monthCountDec}>-</button>
              <button className="table_btn" onClick={monthCountInc}>+</button>
            </td>
          </tr>
          <tr>
            <td>Floor number</td>
          </tr>
          <tr>
            <td>
              <input type="number" value={floorCount} onChange={e => setFloorCount(parseInt(e.target.value))} />
              <button className="table_btn" onClick={floorCountDec}>-</button>
              <button className="table_btn" onClick={floorCountInc}>+</button>
            </td>
          </tr>
          <tr>
            <td>Parking(0: No, 1: Yes)</td>
          </tr>
          <tr>
            <td>
              <input type="number" value={parking} onChange={e => setParking(parseInt(e.target.value))} />
              <button className="table_btn" onClick={parkingDec}>-</button>
              <button className="table_btn" onClick={parkingInc}>+</button>
            </td>
          </tr>
          <tr>
            <td>Brokerage Amount</td>
          </tr>
          <tr>
            <td>
              <input type="number" value={brokAmount} onChange={e => setBrokAmount(parseInt(e.target.value))} />
            </td>
          </tr>
          <tr>
            <td className='table_footer_label'>
              <button type="submit" onClick={handlePredict}>Predict</button>
            </td>
          </tr>
        </table>
      </form>
      </header>

     
    </>
  )
}

export default Predict;
