import React from "react";
import HexaItem from "./Hexa";

const icons = [
  "mdi-nodejs",
  "mdi-react",
  "mdi-language-python"
];


const Hexa = () => {
  return (
    <>
      {icons.map((item, idx) => (
          <HexaItem key={idx} item={item} />
      ))}
    </>
  );
};

export default Hexa;
