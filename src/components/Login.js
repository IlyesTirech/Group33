import React from "react";
import Nav from './Nav'
function Login() {
  return (
    <>
   <Nav/>
    <div className="box"> 
      <form>
        <h2>Login</h2>
        <h4>Email</h4>
        <div className="fun">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <br />
        <br />
        <h4>Password</h4>
        <input type="password" name="password" placeholder="Password" />
        <br />
        <br />
        <button>Login</button>
        {/* <input type="submit" value="Login" /> */}
      </form>
    </div>
    </>
  );
}
export default Login;
