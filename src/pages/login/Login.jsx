import React from "react";
import Navbar from "../../components/navbar/Navar";
import Auth from "../../components/auth/Auth";

const Login = () => {
  return (
    <div>
      <Navbar />
      <Auth isLogin={true} />
    </div>
  );
};

export default Login;
