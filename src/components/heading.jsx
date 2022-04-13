import "./style.css";
import React from "react";

function Heading(props) {
  
    const {handleFunctional, handleClass} = props;
  
    return (
    <div>
      <h1 style={{textShadow: '2px 2px 2px hsl(180, 100%, 51%)'}}>
          Styling using Functional and Class Component
      </h1>
      <div className="btn-wrap">
        <button className="btn" onClick={handleFunctional}>
          To see styling in functional component
        </button>
        <button className="btn" onClick={handleClass}>
          To see styling in class component
        </button>
      </div>
    </div>
  );
};

export default Heading;