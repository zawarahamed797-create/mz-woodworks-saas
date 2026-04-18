"use client";
import { useState } from "react";

export default function Admin() {
  const [pass, setPass] = useState("");

  const login = () => {
    if (pass === "admin123") {
      window.location.href = "/admin/dashboard";
    } else {
      alert("Wrong Password");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">

      <input
        type="password"
        placeholder="Password"
        className="border p-2"
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={login} className="ml-2 bg-black text-white px-4 py-2">
        Login
      </button>

    </div>
  );
}
