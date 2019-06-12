import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { register} from '../Config/UrlProperties';



class SampleForm extends Component {
    state = {
      data: {},
      name: '',
      emailId: '',
      password: '',
      userType: ''
    };
    handlename = e => this.setState({ name: e.target.value });
    handleemailId = e => this.setState({ emailId: e.target.value });
    handlepassword = e => this.setState({ password: e.target.value });
    handleuserType = e => this.setState({userType: e.target.value});
    render() {
      return (
        <div className="SampleForm" >
          <header className="App-header">
            <Form.Input
              label="First Name "
              name="name"
              id="first_name"
              value={this.state.name}
              onChange={this.handlename}
              placeholder="Vishwanth"
            />
              <br/>
            <Form.Input
              label="Email ID"
              name="emailId"
              id="email_id"
              value={this.state.emailId}
              onChange={this.handleemailId}
              placeholder="abc@gmail.com"
            />
            <br />
            <Form.Input
              label="password"
              id="password"
              type="password" 
              name="password"
              value={this.state.password}
              onChange={this.handlepassword}
              placeholder="******"
            />
            <br />
            <select id="user_type"
                    value={this.state.userType}
                    onChange={this.handleuserType}>
            <option value="Investor">I am Investor</option>
            <option value="Investment_Seeker">I am Investment Seeker</option>   
            </select>
            <br/>
            <Button onClick={() => this.sendData()}>Submit</Button>
            <Button onClick={() =>this.movetoLogin()}>Already Registered</Button>

          </header>
        </div>
      );
    }

   movetoLogin = () => {    
    this.props.history.push('/login')
   }

    sendData = () => {
      const dataToSend = {
        name: this.state.name,
        emailId: this.state.emailId,
        password: this.state.password,
        userType: this.state.userType
      };
      console.log(dataToSend);
          fetch(register, {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));
       this.props.history.push('/register')
    }
}

export default withRouter(SampleForm);
