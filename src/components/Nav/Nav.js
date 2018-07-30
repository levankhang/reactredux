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
        const { isLoggedIn, user } = this.props;

        return (
            <Menu secondary>
                <Menu.Item>
                    <img className="ui middle aligned image logo" src="/images/logo.png"/>
                </Menu.Item>

                <Menu.Menu position="right">
                    <Menu.Item>
                      { isLoggedIn && <UserLoggedIn user={user}/>}
                      { !isLoggedIn && <LoginForm submit={this.submit}/>}
                    </Menu.Item>

                    

                </Menu.Menu>
            </Menu>
        )
    }
}

Nav.propTypes = {
    user: PropTypes.object,
    isLoggedIn: PropTypes.bool.isRequired
}

function mapStateToProp(state){
    return {
        user: state.user
    }
}



export default connect(mapStateToProp, { login })(Nav)
