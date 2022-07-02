import { Container, Nav, Navbar } from "react-bootstrap";

function Header () {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">Financial Literacy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link href="/vocab">Vocabulary</Nav.Link>
                    <Nav.Link href="/sort">Sort</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;