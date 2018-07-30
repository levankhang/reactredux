import React, { Component } from 'react'
import HomePage from './HomePage/HomePage'
import RegisterPage from './RegisterPage/RegisterPage'
import { Container } from 'semantic-ui-react'

import './ContentPage.css'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const ContentPage = ({isAuthenticated}) => {
    return (
        <Container className="content-page">
            {isAuthenticated && <HomePage/>}
            {!isAuthenticated && <RegisterPage/>}
        </Container>
    )

}

ContentPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProp(state){
    return {
        isAuthenticated: !!state.user.email
    }
}

export default connect(mapStateToProp)(ContentPage)

// mapState to prop isAuthenticate