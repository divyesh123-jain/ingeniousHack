import React from 'react';

const LoginPage = () => {
  return (
    <div className="bg-gray-800 w-full  h-[100vh] flex items-center justify-center">
      <form className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium mb-4">Welcome back</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="email"
            id="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="password"
            id="password"
            required
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button type = "submit" className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
            Sign In
          </button>
          <a className="text-indigo-500 hover:text-indigo-600" href="#">
            
          </a>
        </div>
      </form>
    </div>
  );
};



export default LoginPage;
