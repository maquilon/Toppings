import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { browserHistory, Link } from 'react-router';

const Header = () => {
    function onHomeClick() {
        browserHistory.push('/');
    }

    function onAddClick() {
        browserHistory.push('/CourseAdd');
    }

    function onAboutUsClick() {
        browserHistory.push('/aboutUs');
    }

    return (
        <Navbar className="navbar-inverse">
            <Navbar.Header>
                <Navbar.Brand >
                    <span onClick={() => onHomeClick()}>Pizza Exercise</span>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} onClick={() => onHomeClick()} >Home</NavItem>
                <NavItem eventKey={2} onClick={() => onAboutUsClick()} >About Us</NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;
