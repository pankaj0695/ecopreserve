import React from "react";
import Auth from "../../components/auth/Auth";
import { useUser } from "../../store/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const onLogin = async (email, password) => {
    try {
      const res = await login(email, password);
      if (res) navigate("/");
      else alert("Login failed");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div>
      <Auth isLogin={true} onSubmit={onLogin} />
    </div>
  );
};

export default Login;
