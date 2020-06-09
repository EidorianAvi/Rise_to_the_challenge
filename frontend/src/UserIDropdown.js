import React from 'react'
import UserOption from './UserOption'

export default function UserDropdown (props) {
    const {users, action} = props
    const showUsers = users.map(user => <UserOption action={action} key={user.id} user={user} />)
        return (
            <div>
                {showUsers}
            </div>
        )
} 