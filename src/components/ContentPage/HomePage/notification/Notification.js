import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import NotificationItem from './NotificationItem'
import './Notification.css'

class Notification extends Component {
    render() {
        return (
            <div className="notification-container">
                <h3>Notifications</h3>

                <List relaxed className="notification-list">
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                </List>
            </div>
        )
    }
}

export default Notification