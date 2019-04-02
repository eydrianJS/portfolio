import React, { Component } from 'react';
import Button from './Button';

class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="flex">
                <div className="middle-box">
                    <div className="text">
                        Cześć, Jestem <span class="highlight">Adrian Olszowski</span>
                        <br/>
                        I jestem full-stack web developer
                    </div>
                    <Button />
                </div> 
            </div>
        );
    }
}
 
export default FirstPage;