import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../context/authContext';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
 

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const loginHandle = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, email, password);
            if (user) {navigate('/')}
        }catch(error){
            console.log(error);
            console.log(error.code);
        }
    }
  return (
    <div className='w-[100vw] h-[100vh] bg-black flex items-center justify-center'>
        <div className='w-[300] h-[200] flex flex-col'>
            <input className='bg-white' value={email} type='email' onChange={ (e) => setEmail(e.target.value)}/>
            <input className='bg-white' value={password} type='password' onChange={ (e) => setPassword(e.target.value)}/>
            <button className='bg-white' onClick={loginHandle}>Login</button>
        </div>
        
    </div>
  )
}
