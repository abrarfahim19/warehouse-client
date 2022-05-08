import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Warehouse App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                        {
                            user?<>
                            <Nav.Link as={Link} to="manage">Manage Item</Nav.Link>
                            <Nav.Link as={Link} to="myitem">My Item</Nav.Link>
                            <Button onClick={()=>signOut(auth)}>LogOut</Button>
                            </>:
                            <>
                                <Nav.Link as={Link} to="login">LogIn</Nav.Link>
                                <Nav.Link as={Link} to="register">SignUp</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
