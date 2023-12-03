import '../assets/SignUp.css'
import login2 from '../assets/images/login2.jpg'


import React, { useState } from 'react';
import { Footer, Navbar } from './partials';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Fname:', fname);
    console.log('Lname:', lname);
    console.log('Email:', email);
    console.log('Password:', password);

    setFname('');
    setLname('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <Navbar showlink={false}/>

    <div className='div1' style={{backgroundImage: `url(${login2})`}} >
      
      <div className='div1a' >
        <h1>Create Account</h1>
        <p>Join the community of freelancers today!</p>
        <form onSubmit={handleLogin}>
        <label>
          First name
          </label>
          <input
            type="text"
            placeholder='Enter first name'
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            />
        <br/>

        <label>
          Last name
          </label>
          <input
            type="text"
            placeholder='Enter last name'
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            />
        <br/>

        <label>
          Email
          </label>
          <input
            type="text"
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        <br/>

        <label>
          Password
          </label>
          <input
            type="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        <br />
        <button type="submit">Sign Up</button>
        </form>
        <br/>
        {/* <p>-------OR-------</p> */}
        <p> Already have an account?
        <button type="submit" className='signup'>
         <Link to='/login'>Login</Link> 
        </button>
        </p>
      </div>


    </div>

    <Footer />
    </>
  );
};

export default SignUp;