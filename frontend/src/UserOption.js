import React from 'react'

export default function UserOption({ user, action }) {
    return (
        <button onClick={() => action(user.id)}>{user.name}</button>
    )
}