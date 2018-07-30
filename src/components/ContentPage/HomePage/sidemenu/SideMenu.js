import React, { Component } from 'react'
import './SideMenu.css'
import { Menu, Dropdown } from 'semantic-ui-react'


class SideMenu extends Component {
    render() {
        return (
            <Menu className="sidemenu" vertical>
                <Menu.Item>
                    <div className="user-item">
                        <img src="/images/avatar.jpg" className="ui image" />
                        <h3>Khang Le</h3>
                    </div>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Menu>
                        <Menu.Item>Wall</Menu.Item>
                        <Menu.Item>Friends</Menu.Item>

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