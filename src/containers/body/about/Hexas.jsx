import React from "react";
import HexaItem from "./Hexa";

const icons = [
  {
    class: "mdi-nodejs",
    label: "JavaScript",
    content: "Jest to najczęściej używany przeze mnie język programowania. Język w którym chciałbym się rozwijać i z którym wiążę swoją zawodową przyszłość. "
  },
  {
    class: "mdi-react",
    label: "React",
    content: ""
  },
  {
    class: "mdi-language-python",
    label: "Python",
    content: ""
  }
];

const Hexa = () => {
  return (
    <>
      {icons.map((item, idx) => (
        <HexaItem
          key={idx}
          item={item.class}
          label={item.label}
          content={item.content}
        />
      ))}
    </>
  );
};

export default Hexa;
