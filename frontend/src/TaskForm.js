import React, { Component } from 'react'
const initialState = {
    description: "",
    length: 0,
    urgency: false
}

export default class TaskForm extends Component {

        state = initialState

        handleSubmit = (event) => {
            event.preventDefault()
            this.props.addTask(this.state)
            this.setState(initialState)
        }
        handleChange = (event) => {
            let {name, value, checked} = event.target
            value = name === "urgency" ? checked : value
            this.setState({
                [name]: value
            })
        }
        render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h2>New Task</h2>
                <label>Description</label>
                <input name="description" value={this.state.description} onChange={this.handleChange} />
                <label>Length of time</label>
                <input name="length" value={this.state.length} onChange={this.handleChange}/>
                <label>Urgency</label>
                <input type="checkbox" name="urgency" checked={this.state.urgency} onChange={this.handleChange} />
                <input type="submit" />
                {/* {this.props.toggleOff ? <button className='delete' onClick={this.props.toggleOff} >Close Form</button>
                : null 
                } */}
              </form>
            </div>
        )
    }
}
