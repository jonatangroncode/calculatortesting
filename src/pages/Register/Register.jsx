import React from "react";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
    userConsent: {
      isTermsAndAgreementsConsented: true,
      timestamp: new Date().toISOString(),
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <main>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              type="text"
              id="username"
              name="username"
              htmlFor="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            >
              Username:{" "}
            </label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label
              type="password"
              id="password"
              name="password"
              htmlFor="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            >
              Password:{" "}
            </label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              required
            >
              <option value="">Välj roll</option>
              <option value="GUEST">Guest</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <button type="submit">Register</button>
        </form>
      </main>
    </div>
  );
};

export default Register;
