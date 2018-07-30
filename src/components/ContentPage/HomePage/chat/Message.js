import React, { Component } from 'react'
import { List, Image, Label } from 'semantic-ui-react'
import './Chat.css'

class Message extends Component {
    render() {
        return (
            <List.Item className="message-item">
                <div className="msg-user">
                    <img src="images/avatar.jpg"/>
                    <div>
                        <h5>Le Van Khang </h5>
                        <p>10h40 pm</p>
                    </div>
                </div>

                <p>message message message message message message message message message message message message </p>
            </List.Item>
        )
    }
}

export default Message