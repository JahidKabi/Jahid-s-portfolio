import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoBack.css";

const GoBack: React.FC = () => {
  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate("/browse");
  };

  return (
    <div className="GoBack-Container" onClick={handleGoBackClick}>
      <button className="go-back-button">← Go Back</button>
    </div>
  );
};

export default GoBack;
