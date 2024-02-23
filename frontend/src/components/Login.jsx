// Path: wizlance_fdfed/frontend/src/components/Signup.jsx

import login2 from '../assets/images/login2.jpg'
import { useState } from "react";
import { Footer, Navbar } from "./partials";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const resp = await dispatch(fetchUser({ email, password }));
      const userData = resp.payload.user;
      console.log(userData);
      setUser(userData);
      setError(false);

      navigate('/mainpage');
    } catch (error) {
      console.error("Login failed:", error);
      setError(true);
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <Navbar showlink={false} />

      {error && <span className='text-center font-light text-xl text-red-700'>Invalid login credentials</span>}

      <div className='my-20 m-auto max-w-6xl flex flex-wrap justify-around p-[10px] border-[#ccc] border-2 rounded-[25px] shadow-[0_0px_20px_rgba(0,0,0,0.1)] text-black w-[70vw]'>

        <div className='flex-col flex-wrap py-10 m-[40px]'>

          <h1 className='text-3xl font-semibold mb-2'>Sign In</h1>
          <p>Enter your credentials</p>
          <form className='flex m-[10px] p-[20px] flex-col' onSubmit={handleLogin}>
            <label className='mb-[8px] text-[20px]'>
              Email
            </label>
            <input
              type="text"
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='p-[12px] mb-[16px] text-black border-b-2 border-gray-400'
            />
            <br />
            <label className='mb-[8px] text-[20px]'>
              Password
            </label>
            <input
              type="password"
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='p-[12px] mb-[16px] text-black border-b-2 border-gray-400'
            />
            <br />
            <button className='p-[10px] bg-black text-[#fff] rounded-[20px] hover:bg-pink-500' type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <br />
          <p>Are you new here?
            <button type="submit" className='signup p-[10px] bg-white border-black border rounded-[12px] m-3'>
              <Link to="/signup">SignUp</Link>
            </button>
          </p>
        </div>
        <div className='w-[32rem] p-6 rounded-xl'>
          <img className='rounded-2xl' src={login2} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
