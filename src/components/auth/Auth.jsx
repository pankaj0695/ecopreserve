import React from "react";
import logo from "/ecopreserve-logo.png";
import styles from "./Auth.module.css";

const Auth = ({ isLogin }) => {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftContent}>
        <div className={styles.logo}>
          <img src={logo} alt="EcoPreserve Logo" />
          <h1>EcoPreserve</h1>
        </div>
        <p>
          Discover local volunteering opportunities and resolve disputes with
          ease using our intelligent chatbots. Our Conflict Resolution Chatbot
          provides personalized guidance and strategies to address conflicts
          constructively, empowering you with effective communication tools to
          foster understanding. Meanwhile, the Community Service Chatbot helps
          you get involved and make a difference in your community effortlessly,
          offering tailored suggestions for service projects that match your
          interests and skills.
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className={styles.formContainer}>
        <h2>{isLogin ? "Login Here!" : "Signup Here!"}</h2>
        <form>
          {/* <label>Email:</label> */}
          <input type="email" placeholder="Enter your Email here" required />
          {!isLogin && (
            <>
              {/* <label>Username:</label> */}
              <input
                type="text"
                placeholder="Enter your Username here"
                required
              />
            </>
          )}
          {/* <label>Password:</label> */}
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">{isLogin ? "Login" : "Signup"}</button>
        </form>
        <p>
          {isLogin ? (
            <>
              Don’t have an account? <a href="/signup">Create an account?</a>
            </>
          ) : (
            <>
              Already have an account? <a href="/login">Login here?</a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
