import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Login.css"

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const signIn=()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user=userCredential.user
        navigate("/home");
    })
    .catch((error)=>{
        const errorCode=error.code;
        alert(errorCode)
    })
}
    return (
        <div className='w-50 px-auto mt-10 items-center'>
            
            <form class="w-full max-w-sm mx-auto">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Email:
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" id="inline-full-name" type="email" required onChange={(e)=>setEmail(e.target.value)} />
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Password:
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" id="inline-password" type="password" placeholder="******************" autocomplete="false" onChange={(e)=>setPassword(e.target.value)} />
    </div>
  </div>
  <div class="md:flex md:items-center ">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3 flex  justify-center items-center">
      <button onClick={signIn} class="shadow   bg-gray-900 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Login
      </button>
    </div>
  </div>
  <div >
    <div class="md:w-1/3"></div>
    {/* <label class="md:w-2/3 block text-gray-500 font-bold">
      <input class="mr-2 leading-tight" type="checkbox"/>
      <span class="text-sm">
        Send me your newsletter!
      </span>
    </label> */}
    <div className='mb-6 mt-2 ml-5'>
    <p className=''>New To Garage? <Link to='/register' className='text-blue-700'>Please Register</Link></p>
    </div>
  </div>
    <hr />
  
</form>
        <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;