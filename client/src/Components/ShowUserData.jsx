import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

class ShowUserData extends Component {
    state = {
      data: {},
    name:'',
    emailId:'',
    password:''
    };
    getData(){
      axios.get(`http://localhost:9000/users/getdata`)
        .then(res => {
          console.log(res.data[0].name+","+res.data[0].emailId+",");

        })

console.log(this.state.name);
    }
    componentDidMount() {
      this.getData();
}
    render() {
      return (
        <div className="wrapper">
          <div align="center" style={{ paddingLeft: 15, paddingRight: 15 }}>
            <Table celled selectable singleLine striped size="small">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="10">Testing Reports</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Row>
                <Table.HeaderCell textAlign="center">FirstName</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Last Name</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Mobile Number</Table.HeaderCell>
              </Table.Row>

              <Table.Body>
              </Table.Body>
            </Table>
          </div>
        </div>

      );
    }
}

export default ShowUserData;
