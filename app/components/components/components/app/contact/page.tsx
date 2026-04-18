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
    <div className="p-10">

      <input
        placeholder="Name"
        className="border p-2 block mb-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <textarea
        placeholder="Message"
        className="border p-2 block mb-2"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button onClick={submit} className="bg-black text-white px-4 py-2">
        Send
      </button>

    </div>
  );
}
