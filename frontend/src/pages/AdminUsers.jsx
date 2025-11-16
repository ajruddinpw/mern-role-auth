// import React from "react";

// import { useEffect, useState } from "react";
// import API from "../utils/api";

// export default function AdminUsers() {
//   const [users, setUsers] = useState([]);

//   const loadUsers = async() => {
//     try{
//       const res = await API.get("/admin/users");
//       setUsers(res.data);
//     }catch(err){
//       alert(err.response?.data?.message || 'Error fetching users');
//     }
//   };

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   return (
//     <div className="container">
//       <h2>Users List (Admin)</h2>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th><th>Email</th><th>Role</th><th>Created At</th>
//           </tr>
//         </thead>

//         <tbody>
//           {users.map(u => (
//             <tr key={u._id}>
//               <td>{u.name}</td>
//               <td>{u.email}</td>
//               <td>{u.role}</td>
//               <td>{new Date(u.createdAt).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const loadUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Error fetching users");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Users List (Admin)</h2>

      <button onClick={handleLogout}>Logout</button>

      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th><th>Created At</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{new Date(u.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
