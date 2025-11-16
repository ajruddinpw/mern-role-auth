
import React from "react";

import { useState } from "react";
import API from "../utils/api";

// client-side password strength basic check
const isStrongPassword = (p) => p && p.length >= 6;

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer"
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!isStrongPassword(form.password)){
      alert('Password must be at least 6 characters');
      return;
    }
    try{
      const res = await API.post("/user/register", form);
      alert(res.data.message);
      window.location.href = "/login";
    }catch(err){
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder="Name"
          onChange={e => setForm({...form, name: e.target.value})}
        /><br/>

        <input required type="email" placeholder="Email"
          onChange={e => setForm({...form, email: e.target.value})}
        /><br/>

        <input required type="password" placeholder="Password"
          onChange={e => setForm({...form, password: e.target.value})}
        /><br/>

        <select 
          value={form.role}
          onChange={e => setForm({...form, role: e.target.value})}
        >
          <option value="customer">Customer</option>
          <option value="partner">Partner</option>
        </select><br/>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
