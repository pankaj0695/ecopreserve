import React from "react";
import Navbar from "../../components/navbar/Navar";
import Auth from "../../components/auth/Auth";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <Auth isLogin={false} />
    </div>
  );
};

export default Signup;
