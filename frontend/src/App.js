import React, { Component } from 'react';
import './App.css';
import UserDropdown from './UserIDropdown';

const baseURL = "http://localhost:3000/"

class App extends Component {
  state = {
    users: [],
    userId: 1,
    tasks: [],
    quotes: []
  }

  componentDidMount(){
    this.getData()
    this.getTasks()
  }

  getData = () => {
    fetch(`${baseURL}users`)
      .then(response => response.json())
      .then(response => this.setState({users: response}))
  }

  getTasks = () => {
    fetch(`${baseURL}users/${this.state.userId}`)
      .then(response => response.json())
      .then(response => this.setState({tasks: response}))
  }

  selectUser = (userId) => {
    this.setState({
      userId: userId
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>Pick a User</h2>
          <UserDropdown users={this.state.users} action={this.selectUser}/>
        </div>
      </div>
    );
  }
}

export default App;
