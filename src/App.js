import React, { Component } from 'react';
import FirstPage from './containers/FirstPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      openPage: true
    }
}
  render() {
    const {openPage} = this.state;
    return (
      <div className="App">
          {openPage && <FirstPage/>}
      </div>
    );
  }
}

export default App;
