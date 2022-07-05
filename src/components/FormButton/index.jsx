import React from "react";
import "./style.css";
function FormButton({ primary, onClick, children }) {
  const buttonType = primary ? "submit" : "button";
  return (
    <button className="form-btn" onClick={onClick} type={buttonType}>
      {children}
    </button>
  );
}
export default FormButton;
