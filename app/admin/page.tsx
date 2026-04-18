"use client";
import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");

  const login = () => {
    if (password === "admin123") {
      window.location.href = "/admin/dashboard";
    } else {
      alert("Wrong Password");
    }
  };

  return (
    <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>

      <div>
        <h2>Admin Login</h2>

        <input
          type="password"
          placeholder="Enter Password"
          style={{padding:"10px",marginTop:"10px"}}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button onClick={login} style={{marginTop:"10px",padding:"10px 20px"}}>
          Login
        </button>
      </div>

    </div>
  );
}
