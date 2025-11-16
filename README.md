 ```bash
 <!-- Role-Based Web Application (Admin, Partner, Customer) -->

A full-stack MERN application demonstrating authentication, authorization, and role-based dashboards as required in the Web Application.

<!-- Features: -->
 User Registration (Partner & Customer)
 Single Login Page for all roles
 JWT-based Authentication
 Role-based Authorization (Admin / Partner / Customer)
 Password Hashing using bcrypt
 Admin Dashboard (View All Users)
 Partner Dashboard (Profile Placeholder)
 Customer Dashboard (Orders Placeholder)
 Protected Routes with JWT
 Admin Auto-Seed Script
 Clean Folder Structure
 MongoDB Database Integration.

# Technology Chosen & Why We Chose Them
>> Frontend – React (Vite)

Fast Development: Vite offers lightning-fast build & reload.

Component Architecture: Helps us create modular UI (Login, Register, Dashboards).

Easy API Integration: Axios + React hooks make API calls seamless.

Client-side Routing: React Router allows protected + role-based routes.

>> Backend – Node.js + Express

Fast & Scalable: Non-blocking architecture → good for authentication systems.

Easy JWT Integration: Express middleware makes token auth very clean.

Simple Project Structure: Routes, controllers, middleware → readable code.

>> Database – MongoDB (Mongoose)

Flexible Document Model: Easy to store users with dynamic roles.

Schema Validation: Mongoose enforces email format, required fields, & unique fields.

Fast queries: Perfect for authentication and user listing.

>> Security Tools

bcrypt: Strong hashing for passwords.

JWT: Secure token-based authentication with expiry support.

 <!-- Tech Stack -->
Frontend:React (Vite),Axios,React Router DOM

Backend: Node.js,Express.js, Mongoose, JWT, bcryptjs,dotenv,MongoDB (Local)

<!--------------------------- Project Folder Structure ------------------------------------>

mern_role_auth/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── admin.controller.js
│   │   └── user.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   └── role.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── admin.routes.js
│   │   ├── index.routes.js
│   │   └── user.routes.js
│   │
│   ├── utils/
│   │   └── seedadmin.js
│   │
│   ├── server.js
|   ├── package-lock.json 
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── ProtectedRoute.jsx
    │   │
    │   ├── pages/
    │   │   ├── AdminUsers.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── Login.jsx
    │   │   └── Register.jsx
    │   │
    │   ├── utils/
    │   │   └── api.js
    │   │
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── styles.css
    │
    ├── index.html
    ├── package.json
    └── package-lock.json

    <!--  How to Run the Project -->

1. Clone the project
     git clone https://github.com/ajruddinpw/mern-role-auth.git
     cd mern_role_auth

2. Setup Backend
    cd backend
    npm install

3. Copy environment file:

cp .env.example .env
Set values in .env:

PORT=5050
MONGO_URI=mongodb://127.0.0.1:27017/mern_role_auth
JWT_SECRET=your_strong_secret_key
JWT_EXPIRES_IN=1h    

<!-- Seed Admin User (Important) -->
npm run seed

This creates:

Email: admin@example.com
Password: Admin@123

<!-- Start Backend -->
npm run start
Backend runs at: http://localhost:5050

 <!--  Setup Frontend -->
cd ../frontend
npm install
npm run dev

Vite will start the UI at: http://localhost:5173

<!----------------- Authentication Flow -------------------------------------->
1. Registration

Partner/Customer can register from /register.

Email validated using regex.

Duplicate email check performed.

Password hashed using bcrypt before saving. 

2. Login

Single login page /login

Backend verifies hashed password.

JWT generated with role + user id.

Token returned to frontend.

3. Authorization

Token stored in localStorage.

Axios interceptor attaches Bearer <token> to all requests.

Protected routes:

/admin/* → Admin only

/dashboard → Any logged-in user.

4. Role-Based Redirects

After login:

Role	                  Redirect
Admin	                 /admin/users
Partner	                 /dashboard (Partner view)
Customer	             /dashboard (Customer view).


<!------------------------ 📄 API Endpoints --------------------------------->
User APIs
Method	    Endpoint		       Description
---------------------------------------------
POST	/api/user/register	   Register customer or partner
POST	/api/user/login	        Login & get JWT
---------------------------------------------

Admin APIs
Method	    Endpoint	           Auth	                      Description
GET	     /api/admin/users	      Admin Only	              Get all users

<!------------------- Database Schema (User Model) ------------------------------------>
users
 name: String (required)
 email: String (unique, required)
 password: String (hashed)
 role: enum("admin","partner","customer")
 createdAt: Date

```