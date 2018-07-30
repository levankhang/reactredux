import React, {Component} from 'react'
import { Container, List } from 'semantic-ui-react'
import PostForm from './PostForm'
import Post from './Post'

class Wall extends Component{
    render(){
        return(
            <Container style={{height: '90%', overflow: 'auto', padding: '5px'}}>
                <h3>Wall</h3>
                <PostForm/>

                <List style={{width: '100%'}}>
                    <Post/>
                    <Post/>
                </List>

            </Container>
        )
    }
}

export default Wall