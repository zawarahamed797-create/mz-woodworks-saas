"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then(setLeads);
  }, []);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold">Leads</h1>

      {leads.map((lead: any, i) => (
        <div key={i} className="border p-3 mt-3">
          <p>Name: {lead.name}</p>
          <p>Message: {lead.message}</p>
          <p>Status: {lead.status}</p>
        </div>
      ))}

    </div>
  );
}
