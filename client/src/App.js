import React, { Component } from "react";
import "./App.css";
import SampleForm from './Components/SampleForm';
import ShowUserData from './Components/ShowUserData';
import InvestorRegistrationShow from './Components/InvestorRegistration/InvesterRegistrationShow';
import LogIn from './Components/LogIn'
import {Route, NavLink, BrowserRouter} from "react-router-dom";




class App extends Component {
    render() {
        return (
          <BrowserRouter>
    <div>
     <div className="content"></div>
    </div>
    <div className="content">
<Route path="/register" component={SampleForm} />
<Route path="/ShowUserData" component={ShowUserData} />
<Route path="/InvestorRegistrationShow" component={InvestorRegistrationShow} />
<Route path="/login" component={LogIn} />
</div>
    </BrowserRouter>
        );
    }
}

export default App;
