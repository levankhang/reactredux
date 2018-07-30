import React, { Component } from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'
import Conversations from './Conversations'
import MessageBox from './MessageBox'
import './Chat.css'

class Chat extends Component {
    render() {
        return (

            <Grid className="chat">
                <Grid.Column width={6} className="chat-column">
                    <Conversations/>
                </Grid.Column>

                <Grid.Column width={10} className="chat-column">
                    <MessageBox/>
                </Grid.Column>

            </Grid>

        )
    }
}

export default Chat