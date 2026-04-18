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
    <div style={{padding:"40px"}}>

      <h1>Customer Leads</h1>

      {leads.length === 0 && <p>No leads yet</p>}

      {leads.map((lead: any, i) => (
        <div key={i} style={{border:"1px solid #ccc",marginTop:"10px",padding:"10px"}}>
          <p><b>Name:</b> {lead.name}</p>
          <p><b>Message:</b> {lead.message}</p>
          <p><b>Status:</b> {lead.status}</p>
        </div>
      ))}

    </div>
  );
}
