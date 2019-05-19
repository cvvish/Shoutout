import React, { Component } from "react";
import "./App.css";
import SampleForm from './Components/SampleForm';
import ShowUserData from './Components/ShowUserData';
import {Route, NavLink, BrowserRouter} from "react-router-dom";


class App extends Component {
    render() {
        return (
          <BrowserRouter>
    <div>
      <h1>Basic crud example</h1>
          <ul className="header">
      <li><NavLink to="/SampleForm">SampleForm</NavLink></li>
      <li><NavLink to="/ShowUserData">ShowUserData</NavLink></li>

          </ul>
     <div className="content"></div>
    </div>
    <div className="content">
<Route path="/SampleForm" component={SampleForm} />
<Route path="/ShowUserData" component={ShowUserData} />
</div>
    </BrowserRouter>
        );
    }
}

export default App;
