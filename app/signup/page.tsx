"use client";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    window.location.href = "/login";
  };

  return (
    <div className="flex h-screen w-screen items-center overflow-hidden px-2">
      <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
        <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-green-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>

        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-center text-3xl font-bold text-gray-700">
            Sign up
          </h1>
          <p className="text-gray-500">Create an account to get started</p>
        </div>

        {/* Name Input */}
        <div className="relative mt-2 w-full">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="peer block w-full rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-green-600"
          >
            Enter Your Name
          </label>
        </div>

        {/* Email Input */}
        <div className="relative mt-2 w-full">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer block w-full rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-green-600"
          >
            Enter Your Email
          </label>
        </div>

        {/* Password Input */}
        <div className="relative mt-2 w-full">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer block w-full rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-green-600"
          >
            Enter Your Password
          </label>
        </div>

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="shrink-0 w-full rounded-lg bg-green-600 py-3 font-bold text-white hover:bg-green-700"
        >
          Sign Up
        </button>

        {/* Already have account? */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="whitespace-nowrap font-semibold text-gray-900 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
