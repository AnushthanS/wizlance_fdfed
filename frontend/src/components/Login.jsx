import '../assets/Login.css'
import login2 from '../assets/images/login2.jpg'


import React, { useState } from 'react';
import { Footer, Navbar } from './partials';
import { Link } from 'react-router-dom';

const Login = () => {
  // State variables to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Perform authentication logic here (e.g., send credentials to a server)

    // For simplicity, let's just log the credentials for now
    console.log('Email:', email);
    console.log('Password:', password);

    // You can redirect the user to another page after successful login
    // For now, let's just clear the input fields
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <Navbar showlink={false}/>
    <div className='div1 '>
      <div className='div1a'>
        <h1>Sign In</h1>
        <p>Enter your credentials for logging into your account</p>
        <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
        </form>
        <br/>
        {/* <p>-------OR-------</p> */}
        Are you new here?
        <button type="submit" className='signup'>
        <Link to="/signup">SignUp</Link>
          </button>

      </div>

      <div className='div1b'>
      <img src={login2}></img>
      </div>

    </div>

    <Footer />
    </>
  );
};

// Export the component for use in other parts of the application
export default Login;
