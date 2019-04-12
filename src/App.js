import React, { Component } from 'react';
import FirstPage from './containers/FirstPage';
import Body from './containers/Body';
import $ from "jquery";
import AOS from "aos";
require('jquery.easing');
require('aos');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      openPage: false
    }
  }

  componentDidMount() {
    $("div.js-scroll-trigger").click(function() {
        var target = $("#" + $(this).attr("sect"));
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 54)
            }, 1000, "easeInOutExpo");
            return false;
            }
    
    });

    AOS.init({
      duration: 1000,
      easing: 'slide',
      once: false
    })
  }

  handleFirstPageClick = () => {
    this.setState({ openPage: !this.state.openPage })    
  }

  render() {
    const {openPage} = this.state;
    return (
      <div className="App">
          { openPage? <FirstPage 
                      click={this.handleFirstPageClick}/> 
                    : <Body clickHome={this.handleFirstPageClick}/> }
      </div>
    );
  }
}

export default App;
