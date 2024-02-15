import React, { useState } from "react";
import "./Login.css";
import Heading from "../../component/heading/Heading";
import SubHeading from "../../component/subheading/SubHeading";
import InputBox from "../../component/inputbox/InputBox";
import Button from "../../component/button/Button";
import Warning from "../../component/warning/Warning";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="big-box">
      <div className="login-box">
        <Heading label="Login" />
        <SubHeading label="Enter your credentials to access your account" />
        <InputBox
          label="Username"
          placeholder="abcdefgh"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <InputBox
          label="Password"
          placeholder="******"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="button-box">
          <Button
            label="Login"
            onClick={async () => {
              try {
                const response = await fetch(
                  "https://dummyjson.com/auth/login",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      username,
                      password,
                    }),
                  }
                );
                const data = await response.json();
                if (data.token) {
                  localStorage.setItem("token", data.token);
                  navigate("/");
                } else {
                  alert("Wrong credentials");
                }
              } catch (error) {
                alert("Wrong credentials");
              }
            }}
          />
        </div>
        <Warning
          lable="Don't have an account?"
          linkText="Register"
          to="/register"
        />
      </div>
    </div>
  );
};

export default Login;
