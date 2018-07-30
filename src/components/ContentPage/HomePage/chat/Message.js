import React, { Component } from 'react'
import { List, Image, Label } from 'semantic-ui-react'
import './Chat.css'

class Message extends Component {
    render() {
        return (
            <List.Item style={{width: '100%'}} className="msg-item">
                <Label  image className="msg-user">
                    <img src='/images/avatar.jpg'/>
                    Le Van Khang   
                </Label>

                <List.Content >
                    <Label basic color="green" pointing='left'>
                        Hello my friend i am a good good good good good good good good good good:)
                    </Label>
                    <span className="msg-time">13h55</span>
                </List.Content>                
            </List.Item>
        )
    }
}

export default Message