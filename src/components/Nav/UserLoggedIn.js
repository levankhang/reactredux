import React from 'react'
import './Nav.css'
import { Label } from 'semantic-ui-react'

const UserLoggedIn = ({user}) => {
    return (
        <Label>
            <img src='/images/avatar.jpg' className='ui avatar right spaced image' />
            {user.name}
        </Label>
    )
}

export default UserLoggedIn