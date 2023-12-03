// import '../assets/SignUp.css'
import login2 from '../assets/images/login2.jpg'


import React, { useState } from 'react';
import { Footer, Navbar } from './partials';
import { Link } from 'react-router-dom';

// Functional component for the login page
const SignUp = () => {
  // State variables to store email and password
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Perform authentication logic here (e.g., send credentials to a server)

    // For simplicity, let's just log the credentials for now
    console.log('Fname:', fname);
    console.log('Lname:', lname);
    console.log('Email:', email);
    console.log('Password:', password);

    // You can redirect the user to another page after successful login
    // For now, let's just clear the input fields
    setFname('');
    setLname('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <Navbar showlink={false}/>

    <div className='div1 mt-10 m-auto max-w-6xl w-[70vw] flex flex-wrap justify-end border-[#ccc] border-2 rounded-[25px] shadow-[0_0px_20px_rgba(0,0,0,0.1)] text-black bg-cover' style={{backgroundImage: `url(${login2})`}}>
      
      <div className='div1a rounded-[25px] p-14 px-32 bg-white border-[#ccc] border-2' >
        <h1 className=' font-semibold text-3xl'>Create Account</h1>
        <p>Join the community of freelancers today!</p>

        <form className='flex m-[8px] p-[40px] flex-col' onSubmit={handleLogin}>
        <label className='mb-[8px] text-[20px]'>
          First name
          </label>
          <input
            type="text"
            placeholder='Enter first name'
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className=' p-[18px] mb-[16px] text-black border-b-2 border-gray-400'
            />
        <br/>

        <label className='mb-[8px] text-[20px]'>
          Last name
          </label>
          <input
            type="text"
            placeholder='Enter last name'
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className=' p-[18px] mb-[16px] text-black border-b-2 border-gray-400'
            />
        <br/>

        <label className='mb-[8px] text-[20px]'>
          Email
          </label>
          <input
            type="text"
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=' p-[18px] mb-[16px] text-black border-b-2 border-gray-400'
            />
        <br/>

        <label className='mb-[8px] text-[20px]'>
          Password
          </label>
          <input
            type="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=' p-[18px] mb-[16px] text-black border-b-2 border-gray-400'
            />
        <br />
        <button type="submit" className='p-[10px] bg-black text-[#fff] rounded-[20px] hover:bg-pink-500'>Sign Up</button>
        </form>
        <br/>
        {/* <p>-------OR-------</p> */}
        <p> Already have an account?
        <button type="submit" className='signup p-[10px] bg-white border-black border rounded-[12px] m-3'>
         <Link to='/login'>Login</Link> 
        </button>
        </p>
      </div>


    </div>

    <Footer />
    </>
  );
};

// Export the component for use in other parts of the application
export default SignUp;