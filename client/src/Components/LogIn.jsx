import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { Authenticate} from '../Config/UrlProperties';



class LogIn extends Component {
    state = {
      data: {},
      emailId: '',
      password: '',
      sucess: false,
    };
    handleemailId = e => this.setState({ emailId: e.target.value });
    handlepassword = e => this.setState({ password: e.target.value });
    render() {
      return (
        <div className="SampleForm" >
          <header className="App-header">
           
            <Form.Input
              label="Email ID"
              name="emailId"
              type="email"
              value={this.state.emailId}
              onChange={this.handleemailId}
              placeholder="abc@gmail.com"
            />
            <br />
            <Form.Input
              label="password"
              type="password" 
              name="password"
              value={this.state.password}
              onChange={this.handlepassword}
              placeholder="******"
            />
            <br />
            <Button onClick={() => this.sendData()}>Submit</Button>

          </header>
        </div>
      );
    }
    sendData = () => {
      const dataToSend = {
        emailId: this.state.emailId,
        password: this.state.password,
      };

          fetch(Authenticate, {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => console.log(response))
          .then(this.setState({sucess :true}))
          .catch(error => console.error('Error:', error));
          console.log(this.response);
          if(this.state.sucess===true)
          {
            this.props.history.push('/InvestorRegistrationShow')
          }
    }
}


export default withRouter(LogIn);
