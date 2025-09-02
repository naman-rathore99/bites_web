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
    <div className="p-6">
      <h1 className="text-xl mb-4">Sign Up</h1>
      <input className="border p-2 mb-2 w-full" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input className="border p-2 mb-2 w-full" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 mb-2 w-full" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-2" onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
