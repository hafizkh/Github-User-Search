import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";


const NavBar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(null);

    const navigate = useNavigate()

    const logIn = () => {
        setisLoggedIn(true);
        alert("Loggind Successfully")
        navigate("/search");
        
        }
    const logOut = () => {
         setisLoggedIn(false);
        alert("Log out Successfully")
         navigate('/home')
         };
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to={"/home"}>iSearch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/search"}>Search</Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>

                        </Nav>
                        
                        {!isLoggedIn ? <form className="d-flex">
                            <button className="btn btn-primary" onClick={logIn}> Login </button>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                        </form> : <button className="btn btn-primary" onClick={logOut}> Logout </button>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar
