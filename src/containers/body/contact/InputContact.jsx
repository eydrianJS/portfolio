import React, { useEffect } from "react";

const InputContact = props => {

  return (
    <label  className="inp" data-aos={props.dataAos}>
      <input type="text" id="inp" placeholder="&nbsp;"/>
      <span className="label">{props.label}</span>
      <span className="border"></span>
    </label>
  );
};

export default InputContact;
