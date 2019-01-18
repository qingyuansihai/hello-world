import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar"
import Footerbar from "./components/footerbar"
class App extends Component {
  render() {
    return (

      <div className="App">

        <Navbar></Navbar>
        {this.props.children}
        <Footerbar></Footerbar>

      </div>

    )
  }
}

export default App;
