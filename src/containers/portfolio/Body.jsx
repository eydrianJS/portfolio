import React, { Component } from "react";
import Navbar from "./body/Navbar";
import About from "./body/about2/About";
import Work from "./body/work/Work";
import Blog from "./body/blog/Blog";
import Contact from "./body/contact/Contact";
import Footer from "./Footer";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="body">
        <Navbar clickHome={this.props.clickHome} />
        <About />
        <Work />
        <Blog />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Body;
