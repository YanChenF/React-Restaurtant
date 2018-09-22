import React, { Component } from 'react'; 
import './App.css';
import Main from './Components/main';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Main />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
