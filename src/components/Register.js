import React from "react";

function Register() {
  return (
    <div className="box">
      <form>
        <h2>Register</h2>
        <div>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <br />
        <input type="text" name="text" placeholder="First Name" />
        <br />
        <br />
        <input type="text" name="text" placeholder="Surname" />
        <br />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <br />
        <button>Login</button>
        {/* <input type="submit" value="Login" /> */}
      </form>
    </div>
  );
}
export default Register;
