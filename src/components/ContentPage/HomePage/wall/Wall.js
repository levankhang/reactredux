import React, {Component} from 'react'
import { Container, List } from 'semantic-ui-react'
import PostForm from './PostForm'
import Post from './Post'

class Wall extends Component{
    render(){
        return(
            <div className="wall-container">
                <h3>Wall</h3>
                <PostForm/>

                <List className="post-list">
                    <Post/>
                    <Post/>
                </List>

            </div>
        )
    }
}

export default Wall