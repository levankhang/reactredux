import React, { Component } from 'react'
import HomePage from './HomePage/HomePage'
import RegisterPage from './RegisterPage/RegisterPage'
import { Container } from 'semantic-ui-react'

import './ContentPage.css'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const ContentPage = ({isLoggedIn}) => {
    return (
        <Container className="content-page">
            {isLoggedIn && <HomePage/>}
            {!isLoggedIn && <RegisterPage/>}
        </Container>
    )

}

ContentPage.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

function mapStateToProp(state){
    return {
        isLoggedIn: !!state.user._id
    }
}

export default connect(mapStateToProp)(ContentPage)

