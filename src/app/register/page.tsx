import React from 'react';

const Register = () => {
  return (
    <div className="flex h-screen bg-[#86B6F6] justify-center items-center">
      {/* Registration Card */}
      <div className="bg-white border border-[#176B87] rounded-2xl shadow-lg p-8 w-96">
        <h1 className="text-3xl font-bold text-black">Register</h1>
        <p className="mt-2 text-lg text-black">Please register to login.</p>

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

        <div className="mt-4 w-full">
          <label className="block text-sm font-medium text-black">Repeat Password</label>
          <input
            type="password"
            placeholder="Password"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button className="mt-6 bg-[#176B87] text-white px-4 py-2 rounded-md w-full">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;