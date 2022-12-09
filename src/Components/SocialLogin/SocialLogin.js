import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
const SocialLogin = () => {
    return (
      <div>
         <div className='flex justify-center items-center mt-5 ml-10'>
        <button className="btn btn-wide  hover:bg-blue-700"> <GoogleIcon className='mr-3'></GoogleIcon>Sign in With Google</button>
        
       </div>
       <div className='flex justify-center items-center mt-5 ml-10'>
        <button className="btn btn-wide  hover:bg-blue-700"><FacebookIcon className='mr-3'></FacebookIcon> Sign in With Facebook</button>
        
       </div>
      </div>
    );
};

export default SocialLogin;