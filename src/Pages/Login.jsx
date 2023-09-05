import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center">
        <div className=" login_form mt-8 bg-blue-200" >
      <div className="">
      <label htmlFor="">Enter Your Email:</label>
        <input type="email" placeholder="Enter your email" className="p-2 rounded" /> <br />
        
      </div>
      <div className="">
      <label htmlFor="">Enter Your password:</label>
            <input type="password" placeholder="**********" className="p-2 rounded" />

        </div>
        <button className="login_btn  bg-cyan-300  mt-2 w-[100px] rounded h-[50px]">Login</button>

    </div>
    
    </div>

  );
};

export default Login;
