import React, { Component } from 'react';
import Button from './Button';
import Animation from './Animation';

class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <>
            <div className="flex">
                <div className="middle-box">
                    <div className="text">
                        Cześć, Jestem <span className="highlight">Adrian Olszowski</span>
                        <br/>
                        I jestem full-stack web developer
                    </div>
                    <Button click={this.props.click} name="Zobacz więcej"/>
                    <Animation />
                </div> 
            </div>
            </>
        );
    }
}
 
export default FirstPage;