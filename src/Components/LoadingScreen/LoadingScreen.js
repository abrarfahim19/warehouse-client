import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingScreen = () => {
    return (
        <div style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="grow" variant="dark" />
        </div>
    );
};

export default LoadingScreen;