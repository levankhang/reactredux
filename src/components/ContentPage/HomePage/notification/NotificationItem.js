import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

const NotificationItem = (props) => {
    return (
        <List.Item>
          <Image avatar src='/images/avatar.jpg' />
          <List.Content>
            <List.Header as='a'>Hong Hanh</List.Header>
            <List.Description>
              Last seen watching{' '}
              <a>
                <b>Post</b>
              </a>{' '}
              just now.
            </List.Description>
          </List.Content>
        </List.Item>
    )
}

export default NotificationItem