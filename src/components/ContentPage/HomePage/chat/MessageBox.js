import React, { Component } from 'react'
import Message from './Message'
import {Grid, TextArea, Form, List } from 'semantic-ui-react'


class MessageBox extends Component {
    render() {
        return (
            <Grid className="message-box">
                <Grid.Row verticalAlign="top" style={{height: '10%'}}>
                    <h3>User name</h3>
                </Grid.Row>

                <Grid.Row style={{height: '70%', overflow: 'auto'}}>
                    <List style={{width: '98%'}}>
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
                </Grid.Row>

                <Grid.Row verticalAlign="bottom" style={{height: '20%'}}>
                    <Form style={{width: '100%'}}>
                        <TextArea style={{width: '100%', resize: 'none'}} spellCheck="false"></TextArea>
                    </Form>
                </Grid.Row>
               
            </Grid>
        )
    }
}

export default MessageBox