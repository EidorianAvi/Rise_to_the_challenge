import React, { Component } from 'react'
import UserOption from './UserOption'

export default class UserDropdown extends Component {
    state = {
        key: 1,

    }

    showUsers = () => this.props.users.map(user => <UserOption key={this.props.user.id} user={this.props.user}/>)
    render() {
        return (
            <select onChange={() => this.props.action(this.state.key)}>
                {this.showUsers()}
            </select>
        )
    }
} 