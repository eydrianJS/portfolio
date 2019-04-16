import React from "react";

const TextArea = props => {
  return (
    <label className="inp">
      <textarea name="asdasd" id="inp" cols="200" rows="5" placeholder="&nbsp;" maxLength="300"></textarea>
      <span className="label">{props.label}</span>
      <span className="border" />
    </label>
  );
};

export default TextArea;
