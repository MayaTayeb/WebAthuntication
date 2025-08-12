import React, { useState } from 'react';
import '../LoginSignup/LoginSignup.css';

import user_icon from '../../assets/person.png';
import password_icon from '../../assets/password.png';
import email_icon from '../../assets/email.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [touched, setTouched] = useState(false);

  const isNameValid = name.trim().length > 0;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length > 8;

  const isFormValid = action === "Sign Up"
    ? (isNameValid && isEmailValid && isPasswordValid)
    : (isEmailValid && isPasswordValid);

  const handleSubmit = () => {
    setTouched(true);

    if (isFormValid) {
      console.log(`${action} successful!`);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {action === "Sign Up" && (
          <div className='input'>
            <img src={user_icon} alt="user icon" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {touched && !isNameValid && (
                <span className="error-message">Please enter your name</span>
              )}
            </div>
          </div>
        )}

        <div className='input'>
          <img src={email_icon} alt="email icon" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {touched && !isEmailValid && (
              <span className="error-message">Please enter a valid email</span>
            )}
          </div>
        </div>

        <div className='input'>
          <img src={password_icon} alt="password icon" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {touched && !isPasswordValid && (
              <span className="error-message">Password must be more than 8 characters</span>
            )}
          </div>
        </div>
      </div>

      {action === "Log In" && (
        <div className='forget-password'>
          forget your password? <span>click here</span>
        </div>
      )}

      <div className='submit-container'>
        <div
          className={`submit ${action === "Sign Up" ? "active" : "inactive"}`}
          onClick={handleSubmit}
        >
          {action}
        </div>

        <div
          className={`submit ${action === "Sign Up" ? "inactive" : "active"}`}
          onClick={() => {
            setAction(action === "Sign Up" ? "Log In" : "Sign Up");
            setTouched(false);
          }}
        >
          {action === "Sign Up" ? "Log In" : "Sign Up"}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;