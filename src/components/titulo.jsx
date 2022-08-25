import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './cartwidget.jsx'

function Titulo() {
    return (
        <Container fluid>
            <Row xs={1} md={4} lg={6}>
                <Logo/>
                <Col className="fs-1 fw-bold text-start">HERMES </Col>
                
            </Row>
            <Row xs={1} md={4} lg={6}>
                <Col className="fs-5 fw-semibold text-md-center">VENTA DE LIBROS</Col>
            </Row>
            
        </Container>
    );
}

export default Titulo;