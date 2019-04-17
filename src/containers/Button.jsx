import React from "react";

const Button = props => {
  return (
    <button type="submit" onClick={props.click} data-aos={props.dataAos}>
      {props.name}
      <i className="mdi mdi-arrow-right" />
    </button>
  );
};

export default Button;
