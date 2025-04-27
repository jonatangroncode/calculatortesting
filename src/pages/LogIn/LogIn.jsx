import React from "react";

const LogIn = () => {
  return (
    <main>
      <h1>Logga in</h1>
      <form>
        <div>
          <label htmlFor="username">Användarnamn:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Lösenord:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Logga in</button>
      </form>
    </main>
  );
};

export default LogIn;
