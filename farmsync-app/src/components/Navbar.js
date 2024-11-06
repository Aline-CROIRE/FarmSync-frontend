import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Tomato Stock</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Dashboard</Nav.Link>
                <Nav.Link href="/reports">Reports</Nav.Link>
                <Nav.Link href="/alerts">Alerts</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;
