import React, { Component } from 'react';
import FirstPage from './containers/FirstPage';
import Body from './containers/Body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      openPage: false
    }
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
