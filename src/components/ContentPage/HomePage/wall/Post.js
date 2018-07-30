import React, { Component } from 'react'
import {Comment, Header, Label, TextArea} from 'semantic-ui-react'

class Post extends Component {
    render(){
        return(
            <Comment.Group style={{padding: '5px', border: '1px solid #ddd'}}>
                <Header as='h3' dividing>
                    <Comment>
                        <Comment.Avatar src='/images/avatar.jpg'/>

                        <Comment.Content>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>paragraph

                            Amazing Design T-shirts

                            EST.2009 / Based in Taiwan

                            Artist / Wu Yu Chieh</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action></Comment.Action>
                            </Comment.Actions>

                        </Comment.Content>
                    </Comment>

                    <Label>
                        Like
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

                <TextArea style={{width: '100%', resize: 'none', borderRadius: '5px'}} placeholder="Comment..."></TextArea>

            </Comment.Group>
        )
    }
}

export default Post