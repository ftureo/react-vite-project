import { Link } from "react-router-dom";
import { IconCart } from "./IconCart.jsx";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav href="#home">Home</Nav>
                        <Link to="/about-us">
                            <Nav>About us</Nav>
                        </Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Women&apos;s Clothing
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Men&apos;s Clothing
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Jewelery
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Electronics
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <IconCart />
        </Navbar>
    );
};

// Existen dos formas de exportar un componente:
// 1. export default NavBar; - Este tipo de export nos sirve para exportar TODO el contenido de una. Puede existir un solo export default por archivo.
// 2. export const NavBar = () => {} - Este tipo de export nos sirve para exportar una parte del contenido de un archivo. Puede existir varios export const por archivo.

// Tanto el export como el export default nos permiten utilizar modulos de Javascript en cualquier parte válida de nuestro código
