import React, { useEffect } from "react";
import Item from "./Item";
import Glider from "glider-js";

const About = () => {
  useEffect(() => {
    new Glider(document.querySelector(".glider"), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      arrows: {
        prev: ".glider-prev",
        next: ".glider-next"
      },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 775,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1,
            duration: 0.25
          }
        },
        {
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            duration: 0.25
          }
        }
      ]
    });
  });
  return (
    <section id="about">
      <div className="glider-contain">
        <div className="glider glider-persp draggable">
          <div>
            <Item scr="slider" />
            <div>cos napisane</div>
          </div>
          <div>
            <Item scr="biurko" />
            <div>cos napisane</div>
          </div>
          <div>
            <Item scr="slider1" />
            <div>cos napisane</div>
          </div>
          <div>
            <Item scr="slider2" />
            <div>cos napisane</div>
          </div>
          <div>
            <Item scr="slider3" />
            <div>cos napisane</div>
          </div>
        </div>
        <button role="button" aria-label="Previous" className="glider-prev">
          «
        </button>
        <button role="button" aria-label="Next" className="glider-next">
          »
        </button>
      </div>
    </section>
  );
};

export default About;
