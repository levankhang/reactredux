import React, { Component } from 'react'
import './SideMenu.css'
import { Menu, Dropdown } from 'semantic-ui-react'


class SideMenu extends Component {
    render() {
        return (
            <Menu className="sidemenu" vertical>
                <Menu.Item>
                    <div className="ui grid centered">
                        <div className="row">
                            <img src="/images/avatar.jpg" className="ui image" />
                        </div>
                        <div className="row">
                            <h2>Khang Le</h2>
                        </div>
                    </div>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Menu>
                        <Menu.Item>Wall</Menu.Item>
                        <Menu.Item>Friends</Menu.Item>

                        <Dropdown item text='Account'>
                            <Dropdown.Menu>
                                <Dropdown.Item icon='edit' text='Edit Profile' />
                                <Dropdown.Item icon='sign out alternate' text='Logout' />
                            </Dropdown.Menu>
                        </Dropdown>

                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <a className="item">
                        <i className="icon browser"></i>
                        Notification
                        <div className="floating ui red label">5</div>
                    </a>
                </Menu.Item>

                <Menu.Item>
                    <a className="item">
                        <i className="icon mail"></i>
                        Messages
                        <div className="floating ui red label">10</div>
                    </a>
                </Menu.Item>


            </Menu>
        )
    }
}

export default SideMenu