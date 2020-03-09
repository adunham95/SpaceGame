import React from "react";
import "./input.scss"


function Input({id, label, type="text", className="", onChange, placeholder}) {  
    return (
      <div className={`formField ${className}`}>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            placeholder={placeholder}
            onChange={(e)=>onChange(e.target.value)}
            type={type}
            />
      </div>
    );
} 

function Select({id, label, type="text", className="", onChange, children}) {  
    return (
      <div className={`formField ${className}`}>
          <label htmlFor={id}>{label}</label>
          <select
            id={id}
            onChange={(e)=>onChange(e.target.value)}
            type={type}
            >
            {children}
        </select>
      </div>
    );
} 

function Submit({className="", children}) {  
    return (
      <div className={`formField button ${className}`}>
          <button>{children}</button>
      </div>
    );
} 

export default Input;
export {Submit, Select}