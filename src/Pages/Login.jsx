import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInHandler = () => {
    console.log(email, password);
  };

  return (
    <div className="flex justify-center">
      <div className=" login_form mt-8 bg-blue-200">
        <div className="">
          <label htmlFor="">Enter Your Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded"
          />{" "}
          <br />
        </div>
        <div className="">
          <label htmlFor="">Enter Your password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            className="p-2 rounded"
          />
        </div>
        <button
          onClick={signInHandler}
          className="login_btn  bg-cyan-300  mt-2 w-[100px] rounded h-[50px]"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
