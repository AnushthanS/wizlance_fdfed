import './assets/SignUp.css'
import login2 from './assets/images/login2.jpg'


import React, { useState } from 'react';

// Functional component for the login page
const SignUpPage = () => {
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
        <p>Are you new here?
        <button type="submit" className='signup'>SignUp</button>
        </p>
      </div>


    </div>
  );
};

// Export the component for use in other parts of the application
export default SignUpPage;