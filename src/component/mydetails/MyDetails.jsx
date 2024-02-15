import React, { useEffect, useState } from "react";
import "./MyDetails.css";
import { useLocation } from "react-router-dom";

const MyDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const location = useLocation();

  // console.log(location.state.firstName);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await fetch("https://dummyjson.com/auth/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          setFirstName(data.firstName);
          setLastName(data.lastName);
        } else if (location.state) {
          // Check if location state exists
          setFirstName(location.state.firstName);
          setLastName(location.state.lastName);
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="you">
      <div className="you">
        {firstName ? firstName[0] : "NA"}
        {lastName ? lastName[0] : null}
      </div>
    </div>
  );
};

export default MyDetails;
