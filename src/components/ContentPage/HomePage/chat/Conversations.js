import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import Conversation from './Conversation'
import './Chat.css'

class Conversations extends Component {
    render() {
        return (
            <div className="conversations-container">
                <h4>Conversations</h4>
                <List divided className="conversation-list">
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </List>
            </div>

        )
    }
}

export default Conversations