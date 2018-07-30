import React, { Component } from 'react'
import Message from './Message'
import { Grid, TextArea, Form, List } from 'semantic-ui-react'
import './Chat.css'


class MessageBox extends Component {
    render() {
        return (
            <div className="message-box-container">

                <h4>User name</h4>

                <List style={{ overflow: 'auto', flexGrow: '1'}}>
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                 
                </List>

                <Form style={{marginBottom: 'auto'}}>
                    <Form.Field>
                        <TextArea spellCheck="false"></TextArea>
                    </Form.Field>
                </Form>


            </div>
        )
    }
}

export default MessageBox