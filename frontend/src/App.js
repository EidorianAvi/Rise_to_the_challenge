import React, { Component } from 'react';
import TaskList from './TaskList'
// import Quote from './Quote'
import './App.css';
import UserDropdown from './UserIDropdown';
import TaskForm from './TaskForm'

const baseURL = 'http://localhost:3000/'
const quoteURL = 'https://type.fit/api/quotes' 

class App extends Component {
  state = {
    users: [],
    userId: 1,
    tasks: [],
    quotes: []
  }

  componentDidMount(){
    this.getData()
    this.getQuote()
    // this.getTasks()
  }

  getData = () => {
    fetch(`${baseURL}users`)
      .then(response => response.json())
      .then(response => this.setState({users: response}))
  }

  getTasks = () => {
    fetch(`${baseURL}users/${this.state.userId}`)
      .then(response => response.json())
      .then(response => this.setState({tasks: response.tasks}))
  }

  selectUser = (userId) => {
    this.setState({
      userId: userId
    })
    this.getTasks()
  }

  addTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })

    let newTask = {...task, user_id: this.state.userId}
    fetch(`${baseURL}/tasks`, {
      method: 'POST',
      headers: {'Content-Type': 'application/JSON'},
      body: JSON.stringify(newTask)
    })
  }

  removeTask = (task) => {
    let newTaskList = this.state.tasks.filter(t => t !== task)
    this.setState({tasks: newTaskList})
    
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: 'DELETE'
    })
  }

  getQuote = () => {
    fetch(quoteURL)
    .then(resp => resp.json())
    .then(resp => this.setState({quotes: resp}))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Rise to the Challenge</h1>
        </header>
        <div className='pick-user'>
          <h2>Pick a User</h2>
          <UserDropdown users={this.state.users} action={this.selectUser} />
        </div>
        <div className='form-div'>
        <TaskForm addTask={this.addTask} />
        </div>
        {/* <Quote quote={this.state.quote} /> */}
        <TaskList  tasks ={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default App;
