import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartWidget';

import {Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar>
            <Container className="justify-content-lg-center">
                <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
                <Navbar.Brand ><Link to="/category/recomendados">Recomendados</Link></Navbar.Brand>
                <Navbar.Brand ><Link to="/category/novelas">Novelas</Link></Navbar.Brand>
                <Navbar.Brand ><Link to="/category/ficcion">Ficción</Link></Navbar.Brand>
                <Navbar.Brand ><Link to="/category/esoterismo">Esoterismo</Link></Navbar.Brand>
                <CartWidget/>
                <Navbar.Toggle />

            </Container>
        </Navbar>
    );
}

export default NavBar;