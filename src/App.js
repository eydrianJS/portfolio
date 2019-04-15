import React, { useState, useEffect } from "react";
import FirstPage from "./containers/FirstPage";
import Body from "./containers/Body";
import $ from "jquery";
import AOS from "aos";
require("jquery.easing");
require("aos");

const App = () => {
  const [openPage, setOpenPage] = useState(false);

  useEffect(() => {
    $("div.js-scroll-trigger").click((elem) => {
      scrollBody(elem.target);
    });
    AOS.init({
      duration: 1000,
      easing: "slide",
      once: false
    });
  });

  const scrollBody = (el) => {
      var target = $("#" + $(el).attr("dest"));
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 54
          },
          1000,
          "easeInOutExpo"
        );
      }
  };

  return (
    <div className="App">
      {openPage ? (
        <FirstPage click={() => setOpenPage(!openPage)} />
      ) : (
        <Body clickHome={() => setOpenPage(!openPage)} />
      )}
    </div>
  );
};

export default App;
