import React from 'react'

export default function UserOption({ user }) {
    return (
        <option>{user.name}</option>
    )
}