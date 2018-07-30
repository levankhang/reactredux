import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

class Conversation extends Component {
    render() {
        return (
            <List.Item>
                <List.Icon name='comment' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'> Hong Hanh </List.Header>
                    <List.Description as='a'>Message....</List.Description>
                </List.Content>
            </List.Item>
        )
    }
}

export default Conversation