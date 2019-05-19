import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from './Components/Users';
import SampleForm from './Components/SampleForm';
import ShowUserData from './Components/ShowUserData';
import {Route, NavLink, BrowserRouter} from "react-router-dom";


class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { apiResponse: "" };
    // }
    //
    // callAPI() {
    //     fetch("http://localhost:9000/testAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }))
    //         .catch(err => err);
    // }
    //
    // postcallAPI() {
    //   var url="http://localhost:9000/testpostAPI";
    //   var data = {userName:"Vishwanth"};
    //   fetch(url, {
    //     method: 'POST', // or 'PUT'
    //     body: JSON.stringify(data), // data can be `string` or {object}!
    //     headers:{
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(res => res.json())
    //   .then(response => console.log('Success:', JSON.stringify(response)))
    //   .catch(error => console.error('Error:', error));
    //
    // }
    //
    // componentDidMount() {
    //     this.callAPI();
    //     this.postcallAPI();
    // }

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
