import { CircularProgress } from '@mui/material';
import React from 'react';

const Loading = () => {
    return (
        <div style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <CircularProgress />
        </div>
    );
};

export default Loading;