// import React from "react";

// import { useState } from "react";
// import API from "../utils/api";

// export default function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   });

//   const handleLogin = async(e) => {
//     e.preventDefault();
//     try{
//       const res = await API.post("/user/login", form);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.user.role);
//       localStorage.setItem("name", res.data.user.name);
//       alert("Logged In Successfully");
//       // redirect based on role
//       const role = res.data.user.role;
//       if(role === 'admin') window.location.href = '/admin/users';
//       else window.location.href = '/dashboard';
//     }catch(err){
//       alert(err.response?.data?.message || 'Error');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input required type="email" placeholder="Email"
//           onChange={e => setForm({...form, email: e.target.value})}
//         /><br/>

//         <input required type="password" placeholder="Password"
//           onChange={e => setForm({...form, password: e.target.value})}
//         /><br/>

//         <button type="submit">Login</button>
//         <p>Don't have an account? <a href="/register">Register</a></p>
//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/user/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("name", res.data.user.name);

      const role = res.data.user.role;
      if (role === "admin") navigate("/admin/users");
      else navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login error");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          required
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          required
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}
