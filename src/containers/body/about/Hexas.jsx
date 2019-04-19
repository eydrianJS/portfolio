import React from "react";
import HexaItem from "./Hexa";

const icons = [
  {
    class: "mdi-nodejs",
    label: " i narzędzia Technologie",
    content: `
    JavaScript(ECMAScript5), JQuery, PHP, Python, HTML, CSS,  FreeMarker(ftl), XML, Groovy, Mongo
    NPM, GIT, Gulp, Webpack, Babel
    VSCode, Postman, Robo 3T, PgAdmin 4,     
    `
  },
  {
    class: "mdi-react",
    label: "komercyją Poza pracą",
    content: "ReactJS, Redux, NodeJS, ECMAScript6, Bootstrap"
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
