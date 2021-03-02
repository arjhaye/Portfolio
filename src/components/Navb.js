import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-scroll'

const Navb = () => {
    return (
            <Navbar fixed="top" className="Navbar" variant="dark" expand="lg">
                <div className="container">
                    <Navbar.Brand>Welcome</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto nav-links">
                            <Nav className="nav__links"><Link
                                activeClass="nav__link"
                                to="bannercontent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Home</Link></Nav>
                            <Nav className="nav__links"><Link
                            activeClass="nav__link"
                                to="servicecontent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Skills</Link></Nav>
                            <Nav className="nav__links"><Link
                            activeClass="nav__link"
                                to="aboutcontent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>About</Link></Nav>
                            <Nav className="nav__links"><Link
                            activeClass="nav__link"
                                to="portfoliocontent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Portfolio</Link></Nav>
                            <Nav className="nav__links"><Link
                            activeClass="nav__link"
                                to="content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Contact</Link></Nav>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
    )
}
export default Navb