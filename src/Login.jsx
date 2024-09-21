import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Inventory } from '../server/models';
import LoginForm from './components/LoginPage/LoginForm';



const Login = () => {
  //NEW

  const navigate = useNavigate();

  const handleLogin = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post('/api/auth/login', formData);

    if (res.data.success) {

      //dispatch this to isAdmin
      navigate('/shop');
    }
  };

  //NEW
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <LoginForm />

    </div>
  );
}

export default Login;



///isadmin redux use ternary to nav to admin page or shopping page
// {
// isadmin ?
// nav to admin Inventory
// :
// nav to shopping page
// }
// store logged into session, at login, send user information to redux, store isadmin separate