import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartwidget';

function NavBar() {
    return (
        <Navbar>
            <Container className="justify-content-lg-center">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Brand href="#home">Tienda</Navbar.Brand>
                <Navbar.Brand href="#home">Infantil</Navbar.Brand>
                <Navbar.Brand href="#home">Ficción</Navbar.Brand>
                <Navbar.Brand href="#home">Esoterismo</Navbar.Brand>
                <CartWidget/>
                <Navbar.Toggle />

            </Container>
        </Navbar>
    );
}

export default NavBar;