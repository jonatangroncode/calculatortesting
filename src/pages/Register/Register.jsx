import React from "react";

const Register = () => {
  return (
    <div>
      <main>
        <h1>Register</h1>
        <form>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <select name="role" id="role">
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
