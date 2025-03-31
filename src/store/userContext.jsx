import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext({
  user: { name: "", email: "" },
  signup: async () => {},
  login: async () => {},
  logout: () => {},
  isLoading: true,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
    setIsLoading(false);
  }, []);

  const signup = async (name, email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        name,
        email,
        password,
      });
      const userData = response.data.user;
      setUser({ ...userData });
      return true;
    } catch (error) {
      console.error("Signup failed:", error);
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      if (response.data.success === false) {
        return false;
      }
      const userData = response.data.user;
      setUser({ ...userData, token: response.data.token });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userData, token: response.data.token })
      );
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, signup, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
