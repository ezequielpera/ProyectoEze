import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartWidget';

import {Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar>
            <Container className="justify-content-lg-center">
                <Navbar.Brand ><Link to="/" className='enlace'>Home</Link></Navbar.Brand>
                <Navbar.Brand ><Link to="/categoria/recomendados" className='enlace'>Recomendados</Link></Navbar.Brand>
                <Navbar.Brand ><Link to="/categoria/novelas" className='enlace'>Novelas</Link></Navbar.Brand>
                <Navbar.Brand ><Link to="/categoria/ficcion" className='enlace'>Ficción</Link></Navbar.Brand>
                <Navbar.Brand ><Link to="/categoria/esoterismo" className='enlace'>Esoterismo</Link></Navbar.Brand>
                <CartWidget/>
                <Navbar.Toggle />

            </Container>
        </Navbar>
    );
}

export default NavBar;
