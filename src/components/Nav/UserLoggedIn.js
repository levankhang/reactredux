import React from 'react'
import './Nav.css'
import { Label, Dropdown } from 'semantic-ui-react'


const UserLoggedIn = ({ user }) => {
    return (
        <div>
            <Label>
                <img src='/images/avatar.jpg' className='ui avatar right spaced image' />
                {user.name}
            </Label>
            <Dropdown text=''>
                <Dropdown.Menu>
                    <Dropdown.Item text='Edit Profile'/>
                    <Dropdown.Item text='Setting'/>
                    <Dropdown.Divider />
                    <Dropdown.Item text='Logout' />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default UserLoggedIn