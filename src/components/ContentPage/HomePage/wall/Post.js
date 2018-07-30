import React, { Component } from 'react'
import {Comment, Header, Label, TextArea} from 'semantic-ui-react'
import './Wall.css'

class Post extends Component {
    render(){
        return(
            <Comment.Group className="post-item">
                <Header as='h3' dividing>
                    <Comment>
                        <Comment.Avatar src='/images/avatar.jpg'/>

                        <Comment.Content>
                            <Comment.Author as='a'>Khang</Comment.Author>
                            <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>Em da niu lay tay anh va khoc :3</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action></Comment.Action>
                            </Comment.Actions>

                        </Comment.Content>
                    </Comment>

                    <Label>
                        <i class="like icon"></i>
                        <Label.Detail>214</Label.Detail>
                    </Label>
                </Header>

                <Comment>
                    <Comment.Avatar src='/images/avatar.jpg'/>
                    <Comment.Content>
                    <Comment.Author as='a'>Matt</Comment.Author>
                    <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>How artistic!</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action></Comment.Action>
                    </Comment.Actions>
                    </Comment.Content>
                </Comment>

                <TextArea className="post-comment-area" placeholder="Comment..."></TextArea>

            </Comment.Group>
        )
    }
}

export default Post