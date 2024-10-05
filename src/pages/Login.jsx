import React from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router';
import LoginForm from '../components/LoginPage/LoginForm';
import { useDispatch } from 'react-redux';



const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post('/api/auth/login', formData);

    if (res.data.success) {

      localStorage.setItem("userdata", JSON.stringify(res.data.userObj))

      dispatch({
        type: 'SET_USER',
        payload: res.data.userObj
      })

      dispatch({
        type: 'SET_IS_ADMIN',
        payload: res.data.userObj.isAdmin
      })

      if (res.data.userObj.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/shop');
      }

    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <LoginForm
        onLogin={handleLogin} />
      <Outlet />
    </div>

  );
}

export default Login;
