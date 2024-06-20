import { Container, Nav, Navbar } from "react-bootstrap";

function Navi()
{

    return(
        <>
        <header>
            <Navbar bg="white" data-bs-theme="white">
                <Container>
                    <Navbar.Brand>
                    <Nav.Link href="/">
                        <img 
                            alt="loading"
                            src="https://media.istockphoto.com/id/1277251837/vector/hand-holding-scales-solid-icon-concept-civil-rights-sign-on-white-background-justice-scales.jpg?s=612x612&w=0&k=20&c=uubB_GGI5Cpn_g7KWpfYAWSg0RBA7CS2Cmr522jL5ic="
                            height="50"
                            className="d-inline-block align-top"
                        />
                        </Nav.Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
        </>
    )

}

export default Navi