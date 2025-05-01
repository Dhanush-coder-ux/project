import React from 'react'

const Signup = () => {
  return (
    <div className="min-h-screen flex  justify-center bg-white px-4 py-8">
    <div className="w-full max-w-sm space-y-6">
      <h1 className="text-2xl font-semibold text-center text-black">
        Create your Popx account
      </h1>


      <div className="relative border border-gray-300 rounded-md px-3 pt-2 pb-2 ">
        <label
          htmlFor="fullName"
          className="absolute -top-2 left-2 bg-white px-1 text-sm text-purple-600"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          className="w-full border-none outline-none bg-transparent text-black placeholder-transparent"
          placeholder="Full Name"
        />
      </div>

      <div className="relative border border-gray-300 rounded-md px-3 pt-2 pb-2">
        <label
          htmlFor="phone"
          className="absolute -top-2 left-2 bg-white px-1 text-sm text-purple-600"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          className="w-full border-none outline-none bg-transparent text-black placeholder-transparent"
          placeholder="Phone Number"
        />
      </div>

      <div className="relative border border-gray-300 rounded-md px-3 pt-2 pb-2">
        <label
          htmlFor="email"
          className="absolute -top-2 left-2 bg-white px-1 text-sm text-purple-600"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full border-none outline-none bg-transparent text-black placeholder-transparent"
          placeholder="Email Address"
        />
      </div>

      <div className="relative border border-gray-300 rounded-md px-3 pt-2 pb-2">
        <label
          htmlFor="password"
          className="absolute -top-2 left-2 bg-white px-1 text-sm text-purple-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full border-none outline-none bg-transparent text-black placeholder-transparent"
          placeholder="Password"
        />
      </div>

      <div className="relative border border-gray-300 rounded-md px-3 pt-2 pb-2 ">
        <label
          htmlFor="company"
          className="absolute -top-2 left-2 bg-white px-1 text-sm text-purple-600"
        >
          Company Name
        </label>
        <input
          type="text"
          id="company"
          className="w-full border-none outline-none bg-transparent text-black placeholder-transparent"
          placeholder="Company Name"
        />
      </div>

      
      <div className="space-y-2">
        <p className="text-sm text-gray-700">Are you an Agency?</p>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="agency" value="yes" className="accent-purple-600" />
            <span className="text-sm">Yes</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="agency" value="no" className="accent-purple-600" />
            <span className="text-sm">No</span>
          </label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup
