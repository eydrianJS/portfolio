import React from "react";

const Item = (props) => {
  return (
      <img src={`{{site.baseurl}}/../img/${props.scr}.jpg`} alt=""/>
  );
};

export default Item;
