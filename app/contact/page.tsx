"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const submit = async () => {
    await fetch("/api/leads", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Message Sent!");
  };

  return (
    <div style={{padding:"40px"}}>

      <h2>Contact Us</h2>

      <input
        placeholder="Your Name"
        style={{display:"block",marginBottom:"10px",padding:"10px",width:"100%"}}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <textarea
        placeholder="Your Message"
        style={{display:"block",marginBottom:"10px",padding:"10px",width:"100%"}}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button onClick={submit} style={{padding:"10px 20px"}}>
        Send
      </button>

    </div>
  );
}
