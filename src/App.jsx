import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      priority: '',
      editEnabled: false,
      deleteItem: false
    };
    
  }

  render() {
    return (
      <div className='container'>

      </div>
    );
  }
}

export default App;
