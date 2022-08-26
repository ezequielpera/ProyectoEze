import Container from 'react-bootstrap/Container';

function Titulo() {
    return (
        <Container>
            <div className='d-flex justify-content-start'>
                <h1>HERMES</h1>
            </div>
            <div className='d-flex justify-content-start'>
                <h2>VENTA DE LIBROS</h2>
            </div>
        </Container>
    );
}

export default Titulo;