import React from "react";

const icons = [
  "mdi-language-javascript",
  "mdi-react",
  "mdi-language-python",
  "mdi-nodejs"
];

const HexaItem = props => {
  return (
    <div className="parent-cechy">
      <div className="cecha">
        <i className={"mdi " + props.item} />
      </div>
    </div>
  );
};

const Hexa = () => {
  return (
    <>
      {icons.map((item, idx) => {  
        return <HexaItem key={idx} item={item} />
      })}
    </>
  );
};

export default Hexa;
