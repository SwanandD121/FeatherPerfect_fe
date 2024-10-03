import React, { useState } from 'react';
import { loginValidation } from '../../Validation/Validation.js';
import { useNavigate } from 'react-router-dom';

function LogIn({ setLogin }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginValidation.validate(formData, { abortEarly: false });
      setErrors({});
      console.log('Login successful');
      navigate("/home"); 
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div className="a-right flex flex-col bg-white/70 dark:bg-slate-800 rounded-2xl p-4 w-96 gap-4 shadow-lg">
      <div className="infoForm flex flex-col gap-4 items-center">
        <h3 className="font-bold text-lg dark:text-white">Login</h3>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full ">
            <input
              type="text"
              placeholder="UserName"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`userName w-full bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none ${
                errors.username ? 'border-red-500' : ''
              }`}
            />
            {errors.username && <p className="text-red-500">{errors.username}</p>}
          </div>

          <div className="w-full mt-2">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`Password w-full bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg outline-none ${
                errors.password ? 'border-red-500' : ''
              }`}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="flex text-sm items-center gap-2">
              <span className="dark:text-white">New to Wildlife?</span>
              <span
                className="font-bold hover:underline hover:cursor-pointer dark:text-white"
                onClick={() => setLogin('SignUp')}
              >
                SignUp
              </span>
            </div>

            <button
              type="submit"
              className="text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2 hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa] hover:border-[#2eaafa] mt-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
