import React, { Component } from 'react';
import './App.css';
import UserDropdown from './UserIDropdown';

const baseURL = "http://localhost:3000/"

class App extends Component {
  state = {
    users: [],
    tasks: [],
    quotes: []
  }

  componentDidMount(){
    this.getData()
  }
  getData = () => {
    fetch(`${baseURL}users`)
      .then(response => response.json())
      .then(response => this.setState({users: response}))
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>Pick a User</h2>
          <UserDropdown users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
