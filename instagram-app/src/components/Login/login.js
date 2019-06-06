import React from "react";

function Login(props) {
  return (
    <div>
      <form onSubmit={() => props.onLogin} className="loginform">
        <h1 className="logininput"> Login please </h1>
        <input
          className="logininput"
          type="text"
          value={props.currentUsername}
          placeholder="Username"
          onChange={() => props.onUsernameChange}
        />
        <input
          className="logininput"
          type="text"
          value={props.currentPw}
          placeholder="Password"
          onChange={() => props.onPwChange}
        />
        <input
          className="logininput"
          className="logininput"
          type="submit"
          value="Login"
        />
      </form>
      {/* <button onClick={() => props.onLogin}> Login</button> */}
    </div>
  );
}

export default Login;
