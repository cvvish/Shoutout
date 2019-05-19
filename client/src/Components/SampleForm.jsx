import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';


class SampleForm extends Component {
    state = {
      data: {},
      name: '',
      emailId: '',
      password: '',
    };
    handlename = e => this.setState({ name: e.target.value });
    handleemailId = e => this.setState({ emailId: e.target.value });
    handlepassword = e => this.setState({ password: e.target.value });
    render() {
      return (
        <div className="SampleForm" >
          <header className="App-header">
            <Form.Input
              label="First Name "
              name="name"
              value={this.state.name}
              onChange={this.handlename}
              placeholder="Vishwanth"
            />
              <br/>
            <Form.Input
              label="Email ID"
              name="emailId"
              value={this.state.emailId}
              onChange={this.handleemailId}
              placeholder="abc@gmail.com"
            />
            <br />
            <Form.Input
              label="password"
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
        name: this.state.name,
        emailId: this.state.emailId,
        password: this.state.password,
      };
      console.log(dataToSend);

          var url="http://localhost:9000/users";
          fetch(url, {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));


    }
}

export default withRouter(SampleForm);
