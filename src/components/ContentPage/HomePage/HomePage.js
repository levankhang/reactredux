import React, { Component } from 'react'
import SideMenu from './sidemenu/SideMenu'
import './HomePage.css'
import {Grid} from 'semantic-ui-react'
import Chat from './chat/Chat'
import Wall from './wall/Wall'
import Notification from './notification/Notification'

class HomePage extends Component{
    render(){
        return(
            <Grid className="home-page">
                <Grid.Column className="home-column" width={4}>
                    <SideMenu/>
                </Grid.Column>

                 <Grid.Column className="home-column" width={12}>
                    {false && <Notification/>}
                    {false && <Chat/>}
                    {true && <Wall/>}
                </Grid.Column>
            </Grid>
        )
    }
}

export default HomePage
// map state to prop user