import React, { Component } from 'react'
import { Container, List } from 'semantic-ui-react'
import NotificationItem from './NotificationItem'

class Notification extends Component {
    render() {
        return (
            <Container style={{ height: '100%', overflow: 'hidden'}}>
                <h3>Notifications</h3>

                <List relaxed style={{ height: '85%', overflow: 'auto'}}>
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
            </Container>
        )
    }
}

export default Notification