import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const GoogleLoginComponent = () => {
  return (
    <div className='main-container'>
       <GoogleLogin
        onSuccess={credentialResponse => {
            const details = jwt_decode(credentialResponse.credential);
            console.log(details)
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          theme = "filled_black"
          size="medium"
          shape='square'
          // ux_mode='redirect'
          // redirect_uri='http://localhost:3000/sign-up'
        />
    
    </div>
  );
}

export default GoogleLoginComponent;
