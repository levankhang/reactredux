import React, { Component } from 'react'
import { Form, Button, TextArea} from 'semantic-ui-react'

class PostForm extends Component {
    render(){
        return(
            <Form>
                <Form.Field>
                    <TextArea placeholder="What're you thinking..."/>
                </Form.Field>
                
                <Form.Field>
                    <Button primary>Post</Button>
                </Form.Field>
            </Form>
        )
    }
}

export default PostForm