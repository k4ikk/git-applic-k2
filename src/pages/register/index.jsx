import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import { useState } from 'react';
import { React } from 'react'

export function Register() {
            
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    function handleSignOut(e) {
        e.preventDefault()

        createUserWithEmailAndPassword(email, password)
    }
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>Registered User: {user.user.email}</p>
          </div>
        );
      }
      return (
      <>
     <h1>Register</h1> 
      <div className='register'>
       <input 
       type="email" placeholder='example@applic.co' onChange={(e) => setEmail(e.target.value)} required/>
       <br/>
       <input type="password" placeholder='*******' onChange={(e) => setPassword(e.target.value)} required/>
       <br/>
        <button onClick={handleSignOut}>Login</button>
       </div>
    </>
   )
}