import React, { Component } from 'react'
import './Nav.css'
import LoginForm from './LoginForm'
import UserLoggedIn from './UserLoggedIn'
import { Menu } from 'semantic-ui-react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { login } from '../../actions/auth'

class Nav extends Component {
    constructor(props){
        super(props)

    }

    submit = (data) => this.props.login(data).then(() => console.log('Logged in'))

    render() {
        return (
            <Menu secondary>
                <Menu.Item>
                    <img className="ui middle aligned image logo" src="/images/logo.png"/>
                </Menu.Item>

                <Menu.Menu position="right">
                    <Menu.Item>
                      { !!this.props.user.email && <UserLoggedIn user={this.props.user}/>}
                      { !this.props.user.email && <LoginForm submit={this.submit}/>}
                    </Menu.Item>

                </Menu.Menu>
            </Menu>
        )
    }
}

Nav.propTypes = {
    user: PropTypes.object
}

function mapStateToProp(state){
    return {
        user: state.user
    }
}



export default connect(mapStateToProp, {login})(Nav)

// map state to props user