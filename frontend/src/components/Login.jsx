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
    <div className=' my-20 m-auto max-w-6xl flex flex-wrap justify-around p-[10px] border-[#ccc] border-2 rounded-[25px] shadow-[0_0px_20px_rgba(0,0,0,0.1)] text-black w-[70vw]'>

      <div className=' flex-col flex-wrap py-10 m-[40px]'>
        <h1 className=' text-3xl font-semibold mb-2'>Sign In</h1>
        <p>Enter your credentials for logging into your account</p>
        <form className=' flex m-[10px] p-[20px] flex-col' onSubmit={handleLogin}>
        <label className=' mb-[8px] text-[20px]'>
          Email
          </label>
          <input
            type="text"
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=' p-[12px] mb-[16px] text-black border-b-2 border-gray-400'
            />
        <br/>
        <label className=' mb-[8px] text-[20px]'>
          Password
          </label>
          <input
            type="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className=' p-[12px] mb-[16px] text-black border-b-2 border-gray-400'
            />
        <br />
        <button className='p-[10px] bg-black text-[#fff] rounded-[20px] hover:bg-pink-500' type="submit">Login</button>
        </form>
        <br/>
        <p>Are you new here?
        <button type="submit" className='signup p-[10px] bg-white border-black border rounded-[12px] m-3'>
        <Link to="/signup">SignUp</Link>
          </button>
        </p>
      </div>

      <div className='div1b w-[32rem] p-6 rounded-xl'>
      <img className='rounded-2xl' src={login2}></img>
      </div>

    </div>

    <Footer />
    </>
  );
};

// Export the component for use in other parts of the application
export default Login;
