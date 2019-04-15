import React, { useState, useEffect } from "react";
import FirstPage from "./containers/FirstPage";
import Body from "./containers/Body";
import $ from "jquery";
import AOS from "aos";
import { TimelineMax, TweenMax, Power4 } from 'gsap'
import ScrollMagic from 'scrollmagic'
import ('imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')
import ('imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap')
require("jquery.easing");
require("aos");

const App = () => {
  const [openPage, setOpenPage] = useState(false);

  useEffect(() => {
    $("div.js-scroll-trigger").click(elem => {
      scrollBody(elem.target);
    });
    AOS.init({
      duration: 1000,
      easing: "slide",
      once: false
    });

    var tl = new TimelineMax({ onUpdate: updatePercentage });
    var tl2 = new TimelineMax();
    const controller = new ScrollMagic.Controller();

    tl.from("blockquote", 0.5, { x: 200, opacity: 0 });
    tl.from("span", 1, { width: 0 }, "=-.5");
    tl.from(
      "#office",
      1,
      { x: -200, opacity: 0, ease: Power4.easeInOut },
      "=-1"
    );
    tl.from(
      "#building",
      1,
      { x: 200, opacity: 0, ease: Power4.easeInOut },
      "=-.7"
    );

    tl2.from("#box", 1, { opacity: 0, scale: 0 });
    tl2.to("#box", 0.5, {
      left: "20%",
      scale: 1.3,
      borderColor: "white",
      borderWidth: 12,
      boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)"
    });

    const scene = new ScrollMagic.Scene({
      triggerElement: ".sticky",
      triggerHook: "onLeave",
      duration: "100%"
    })
      .setPin(".sticky")
      .setTween(tl)
      .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: "blockquote"
    })
      .setTween(tl2)
      .addTo(controller);

    function updatePercentage() {
      //percent.innerHTML = (tl.progress() *100 ).toFixed();
      tl.progress();
    }
  });

  const scrollBody = el => {
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
