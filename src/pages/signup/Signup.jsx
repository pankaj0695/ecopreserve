import React from "react";
import Auth from "../../components/auth/Auth";
import { useUser } from "../../store/userContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useUser();
  const navigate = useNavigate();
  const onSignup = async (name, email, password) => {
    try {
      const res = await signup(name, email, password);
      if (res) navigate("/login");
      else alert("Signup failed");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      <Auth isLogin={false} onSubmit={onSignup} />
    </div>
  );
};

export default Signup;
