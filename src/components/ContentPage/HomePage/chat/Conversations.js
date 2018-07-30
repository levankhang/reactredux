import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import Conversation from './Conversation'

class Conversations extends Component {
    render(){
        return(
            <List divided relaxed style={{ overflow: 'auto', height: '89%'}}>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
            </List>    
        )
    }
}

export default Conversations