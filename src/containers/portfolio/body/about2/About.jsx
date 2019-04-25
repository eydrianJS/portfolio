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
    <div className="about">
      <section id="about">
        <div className="glider-contain">
          <div className="glider glider-persp draggable">
            <div>
              <Item scr="slider" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates distinctio alias possimus aperiam inventore ratione.
                Fuga saepe tempora vitae expedita quidem velit, itaque
                laboriosam ratione molestiae ducimus ea dolorem iste.
              </div>
            </div>
            <div>
              <Item scr="biurko" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates distinctio alias possimus aperiam inventore ratione.
                Fuga saepe tempora vitae expedita quidem velit, itaque
                laboriosam ratione molestiae ducimus ea dolorem iste.
              </div>
            </div>
            <div>
              <Item scr="slider1" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates distinctio alias possimus aperiam inventore ratione.
                Fuga saepe tempora vitae expedita quidem velit, itaque
                laboriosam ratione molestiae ducimus ea dolorem iste.
              </div>
            </div>
            <div>
              <Item scr="slider2" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates distinctio alias possimus aperiam inventore ratione.
                Fuga saepe tempora vitae expedita quidem velit, itaque
                laboriosam ratione molestiae ducimus ea dolorem iste.
              </div>
            </div>
            <div>
              <Item scr="slider3" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates distinctio alias possimus aperiam inventore ratione.
                Fuga saepe tempora vitae expedita quidem velit, itaque
                laboriosam ratione molestiae ducimus ea dolorem iste.
              </div>
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
    </div>
  );
};

export default About;
