import React from "react";

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={`number-button button-${props.number}`}>
        {props.number}
      </button>
    </>
  );
};

export default NumberButton;
