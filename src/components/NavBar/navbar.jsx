import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartwidget';

import {Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar>
            <Container className="justify-content-lg-center">
                <Navbar.Brand ><Link to ="/">Home</Link></Navbar.Brand>
                <Navbar.Brand >Recomendados</Navbar.Brand>
                <Navbar.Brand >Novelas</Navbar.Brand>
                <Navbar.Brand >Ficción</Navbar.Brand>
                <Navbar.Brand >Esoterismo</Navbar.Brand>
                <CartWidget/>
                <Navbar.Toggle />

            </Container>
        </Navbar>
    );
}

export default NavBar;