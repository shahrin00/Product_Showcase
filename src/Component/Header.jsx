import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-center gap-[60px] bg-cyan-200 text-center p-4 text-lg">
      <Link to="/" ><li>Home</li></Link>
      <Link to="/details" ><li>Details</li></Link>
      <Link to="/login"><li>Login</li></Link>

      </nav>
    </div>
  );
};

export default Header;
