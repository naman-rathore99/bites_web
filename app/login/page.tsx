"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center overflow-hidden px-2">
      {/* Login Card */}
      <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
        <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>

        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-center text-3xl font-bold text-gray-700">
            Sign in
          </h1>
          <p className="text-gray-500">Sign in to access your account</p>
        </div>

        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Email Input */}
        <div className="relative mt-2 w-full">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-1 peer block w-full appearance-none rounded-lg  border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
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
            className="border-1 peer block w-full appearance-none rounded-lg  border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
          >
            Enter Your Password
          </label>
        </div>

        {/* Login Button + Forgot Password */}
        <div className="flex w-full items-center">
          <button
            onClick={handleLogin}
            className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white hover:bg-blue-700"
          >
            Login
          </button>
          <a
            className="w-full text-center text-sm font-medium text-gray-600 hover:underline"
            href="#"
          >
            Forgot your password?
          </a>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="whitespace-nowrap font-semibold text-gray-900 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
