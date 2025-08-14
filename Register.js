import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext); // Optional: auto-login

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        console.log("✅ Registered:", data);

        // Auto login if token is returned
        if (data.token && data.user) {
          login({ email: formData.email, password: formData.password });
        }
      } else {
        console.error("❌ Registration failed:", data);
      }
    } catch (err) {
      console.error("❌ Error:", err);
    }
  };

  return (
  <div className="container mt-5">
    <h2>Register</h2>
    <form onSubmit={handleSubmit} className="w-50">
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  </div>
);

};

export default Register;
