// import React from "react";

// export default function Dashboard() {
//   const role = localStorage.getItem("role");
//   const name = localStorage.getItem("name");

//   return (
//     <div className="container">
//       <h2>Dashboard</h2>
//       <p>Welcome, {name} — Role: {role}</p>

//       {role === "admin" && (
//         <a href="/admin/users">Go to Users Management</a>
//       )}

//       {role === "partner" && (
//         <>
//           <h3>Partner Dashboard</h3>
//           <p>Partner profile and referrals placeholder</p>
//         </>
//       )}
//       {role === "customer" && (
//         <>
//           <h3>Customer Dashboard</h3>
//           <p>Orders placeholder</p>
//         </>
//       )}
//     </div>
//   );
// }



import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Welcome, {name} — Role: {role}</h2>

      <button onClick={handleLogout}>Logout</button>

      {role === "partner" && (
        <>
          <h3>Partner Dashboard</h3>
          <p>Partner profile & referrals placeholder</p>
        </>
      )}

      {role === "customer" && (
        <>
          <h3>Customer Dashboard</h3>
          <p>Orders placeholder</p>
        </>
      )}
    </div>
  );
}
