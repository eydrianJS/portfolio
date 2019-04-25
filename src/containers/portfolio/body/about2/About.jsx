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
              Technologie i narzędzia w pracy komerccyjnej: <br/>
              › ECMAScript5, JQuery, PHP, Python, HTML, CSS,  FreeMarker(ftl), XML, Groovy, Mongo<br/>
              › NPM, GIT, Gulp, Webpack, Babel<br/>
              › VSCode, Postman, Robo 3T, PgAdmin 4, 
              </div>
            </div>
            <div>
              <Item scr="slider1" />
              <div>
                  <a href='/pdf/Adrian-Olszowski-PL.pdf' download>Polskie CV</a>
                  <a href='/pdf/Adrian-Olszowski.pdf' download>English CV</a>
              </div>
            </div>
            <div>
              <Item scr="biurko" />
              <div>
              Technologie używane poza pracą komercyją<br/>
              › ReactJS, Redux, NodeJS, ECMAScript6, Bootstrap
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
