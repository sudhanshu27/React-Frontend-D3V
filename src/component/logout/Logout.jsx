import React from "react";
import "./Logout.css";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return <button className="log" onClick={handleClick}>Logout</button>;
};

export default Logout;
