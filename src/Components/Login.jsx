// import React from 'react';

// const Login = () => {
//   return (
//     <div className="h-[80vh] w-[50vw] bg-black text-white mx-[25vw] my-[10vh] p-[10vw] rounded-2xl">Login</div>
//   )
// }

// export default Login

// width: 993px;
// height: 888px;
// top: 95.37px;
// left: 463px;
// gap: 0px;
// border-radius: 20px 0px 0px 0px;
// border: 1px 0px 0px 0px;
// opacity: 0.6px;


import React from 'react';
// import PVSIcon from "./assets/Group520.svg";
import pvsIcon from "../assets/Group520.svg";
import emailIcon from "../assets/mail-01.svg";
import lockIcon from "../assets/square-lock-password.svg";


const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        {/* <PVSIcon className="w-5 h-5 text-gray-400 absolute left-3 top-3"/> */}

        <div className="flex items-center justify-center h-full">
          <img src={pvsIcon} alt="PVSIcon" className="h-10" />
        </div>


        <h2 className="text-lg font-bold text-center text-gray-800 mt-5">Login Your Account</h2>

        <h3 className="text-sm text-center text-gray-800 pb-5">Lorem Ipsum is simply dummy text of the printing.</h3>

        <form className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex items-center">
              <img src={emailIcon} alt="PVSIcon" />
              <input
                id="email"
                type="email"
                required
                className="w-full pl-10 p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center">
              <img src={lockIcon} alt="PVSIcon" />
              <input
                id="password"
                type="password"
                required
                className="w-full pl-10 p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;