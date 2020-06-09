import React from 'react'
import UserOption from './UserOption'

export default function UserDropdown({ users }) {

    const showUsers = users.map(user => <UserOption user={user}/>)

    return (
        <select>
            {showUsers}
        </select>
    )
} 