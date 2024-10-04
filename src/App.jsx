
import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        time: new Date().toLocaleTimeString(), 
      };
    }
  
  
    componentDidMount() {
      this.timerID = setInterval(() => this.x(), 1000); 
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID); 
    }
  
    x() {
      this.setState({
        time: new Date().toLocaleTimeString(), 
      });
    }
  
    render() {
      return (
        <div id="one">
            <div id="two">
          {this.state.time} 
        </div>
        </div>
      );
    }
  }
  export default App