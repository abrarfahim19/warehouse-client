import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer>
                    <Navbar fixed="bottom" className="justify-content-center mt-5" expand="lg" variant="dark" bg="dark">
                        <Navbar.Brand >
                            <small className="text-center">copyright &copy; {year} </small>
                        </Navbar.Brand>
                    </Navbar>
            </footer>
        </div>
    );
};

export default Footer;