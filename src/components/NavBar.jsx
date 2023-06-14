import { Link } from "react-router-dom";
import { IconCart } from "./IconCart.jsx";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/">
                    <Navbar.Brand>React E-Commerce</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">
                            <Nav>Home</Nav>
                        </Link>
                        <Link to="/about-us">
                            <Nav>About us</Nav>
                        </Link>
                        <Link to="/contact">
                            <Nav>Contact</Nav>
                        </Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <Link to="/category/Women's Clothing">
                                <Nav>Women&apos;s Clothing</Nav>
                            </Link>
                            <Link to="/category/Men's Clothing">
                                <Nav>Men&apos;s Clothing</Nav>
                            </Link>
                            <Link to="/category/Jewelery">
                                <Nav>Jewelery</Nav>
                            </Link>
                            <Link to="/category/Electronics">
                                <Nav>Electronics</Nav>
                            </Link>
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
