import { Button, IconButton } from '@mui/material';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import './Social.css';
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    
    let errorElement;

    if(loading){
        return <LoadingScreen></LoadingScreen>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user){
        navigate('/home');
    }
    return (
        <div>
            <hr/>
            {errorElement}
                  <ul className="social-media-list">
                  <IconButton onClick={() => signInWithGoogle()}>
                    <li>
                      <i className="fa fa-google" aria-hidden="true"></i>
                    </li>
                    </IconButton>
                  </ul>
                  <p className='text-center'>Login With Google</p>
                  <hr/>  
            </div>
    );
};

export default Social;