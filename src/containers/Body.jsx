import React, { Component } from "react";
import $, { easing } from "jquery";
import Navbar from "./body/Navbar";
import About from "./body/about/About";
import Work from "./body/work/Work";
import Blog from "./body/blog/Blog";
import Contact from "./body/contact/Contact";
require('jquery.easing');

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log($('a.js-scroll-trigger[href*="#"]:not([href="#"])'));
        $("div.js-scroll-trigger").click(function() {
            var target = $("#" + $(this).attr("sect"));
            if (target.length) {
                $('html, body').animate({
                  scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
              }
        
        });
  }

  render() {
    return (
      <div className="body">
        <Navbar clickHome={this.props.clickHome} />
        <About />
        <Work />
        <Blog />
        <Contact />
      </div>
    );
  }
}

export default Body;
