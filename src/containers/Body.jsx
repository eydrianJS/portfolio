import React, { Component } from 'react';
import Navbar from './body/Navbar'
import About from './body/About'
import Work from './body/Work'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="body">
            <Navbar clickHome={this.props.clickHome} />
            <About />
            <Work />
        </div>   
        );
    }
}
 
export default Body;