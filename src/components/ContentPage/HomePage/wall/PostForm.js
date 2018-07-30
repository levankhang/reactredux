import React, { Component } from 'react'
import { Form, Button, TextArea} from 'semantic-ui-react'

class PostForm extends Component {
    render(){
        return(
            <Form style={{marginRight: '5px'}}>
                <TextArea placeholder="What're you thinking..."/>
                <Button primary style={{marginTop: '5px'}}>Post</Button>
            </Form>
        )
    }
}

export default PostForm