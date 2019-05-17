import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';


class SampleForm extends Component {
    state = {
      data: {},
      firstName: '',
      lastName: '',
      mobileNumber: '',
    };
    handleFirstName = e => this.setState({ firstName: e.target.value });
    handleLastName = e => this.setState({ lastName: e.target.value });
    handleMobileNumber = e => this.setState({ mobileNumber: e.target.value });
    render() {
      return (
        <div className="SampleForm" >
          <header className="App-header">
            <Form.Input
              label="First Name "
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleFirstName}
              placeholder="Vishwanth"
            />
              <br/>
            <Form.Input
              label="Last Name "
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleLastName}
              placeholder="Venkatesh"
            />
            <br />
            <Form.Input
              label="PH Number"
              name="mobileNumber"
              value={this.state.mobileNumber}
              onChange={this.handleMobileNumber}
              placeholder="9994943027"
            />
            <br />
            <Button onClick={() => this.sendData()}>Submit</Button>

          </header>
        </div>
      );
    }
    sendData = () => {
      const dataToSend = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        mobileNumber: this.state.mobileNumber,
      };
      console.log(dataToSend);
      // this.props.history.push('/show-data');

          var url="http://localhost:9000/testpostAPI";
          fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(dataToSend), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));


    }
}

export default withRouter(SampleForm);
