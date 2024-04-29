import React, { useState } from "react";
import "./Modal.css";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "@firebase/auth";

const Signup = ({
  email,
  setEmail,
}) => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async(e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      setEmail("");
      setPassword("");
        setConfirmPassword("");
      sendEmailVerification(auth.currentUser).then(() => {
      alert("Account created successfully, Kindly check your email and verify it using the link sent")
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  };
  return (
    <div className="modal-body">
    <p>
      Welcome back to SwiftLoop.
    </p>
    <form className="auth-form" onSubmit={(e) => {handleSignup(e)}}>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
        <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
            placeholder="Enter password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </div>
      <button
        className="btn2">Sign Up</button>
    </form>
    <div className="signup-with-g">
      <span>
        <p>Already have an account? <Link to="/signin">Login</Link></p>
      </span>
    </div>
  </div>
  );
};

export default Signup;
