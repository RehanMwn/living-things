import React from 'react';

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-[#176B87]">
      <div className="w-96 p-8 border border-[#005FAF] rounded-2xl bg-white shadow-lg">
        <h1 className="text-3xl font-bold text-black">Login</h1>
        <p className="mt-2 text-lg text-gray-600">Please enter your email.</p>

        <div className="mt-6 w-full">
          <label className="block text-sm font-medium text-black">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mt-4 w-full">
          <label className="block text-sm font-medium text-black">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button className="mt-6 bg-[#005FAF] text-white px-4 py-2 rounded-md w-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;