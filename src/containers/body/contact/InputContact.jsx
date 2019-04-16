import React, { useEffect } from "react";

const InputContact = props => {

  return (
    <label for="inp" class="inp">
      <input type="text" id="inp" placeholder="&nbsp;"/>
      <span class="label">Label</span>
      <span class="border"></span>
    </label>
  );
};

export default InputContact;
