import { Link, Typography } from '@mui/material';
import React from 'react';
import { Navbar } from 'react-bootstrap';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://warehouse-managemnet.app/">
          Warehouse-Management
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    return (
        <div>
            <footer>
                    <Navbar fixed="bottom" className="justify-content-center mt-5" expand="lg" variant="dark" bg="dark">
                        <Navbar.Brand >
                            <Copyright className="text-white" sx={{ mt: 2, mb: 2 }} />
                        </Navbar.Brand>
                    </Navbar>
            </footer>
        </div>
    );
};

export default Footer;