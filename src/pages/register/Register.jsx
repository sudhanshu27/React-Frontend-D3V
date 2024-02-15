import React, { useState } from "react";
import "./Register.css";
import Heading from "../../component/heading/Heading";
import SubHeading from "../../component/subheading/SubHeading";
import InputBox from "../../component/inputbox/InputBox";
import Button from "../../component/button/Button";
import Warning from "../../component/warning/Warning";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="big-box">
      <div className="box">
        <Heading label="Register" />
        <SubHeading label="Enter your information to create an account" />
        <InputBox
          label="First Name"
          placeholder="Sudhanshu"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputBox
          label="Last Name"
          placeholder="Pal"
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputBox
          label="Email"
          placeholder="abc@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBox
          label="Password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-box">
          <Button
            label="Register"
            onClick={async () => {
              try {
                const response = await fetch(
                  "https://dummyjson.com/users/add",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      firstName,
                      lastName,
                      email,
                      password,
                    }),
                  }
                );
                const data = await response.json();
                navigate("/", { state: data});
                alert("New user registered successfully");
              } catch (err) {
                alert("Error registering user");
              }
            }}
          />
        </div>
        <Warning
          lable="Already have an account?"
          linkText="Login"
          to="/login"
        />
      </div>
    </div>
  );
};

export default Register;
