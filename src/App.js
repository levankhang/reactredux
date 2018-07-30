import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import ContentPage from './components/ContentPage/ContentPage'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



class App extends Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <Container className="app">
        <Nav isLoggedIn={isLoggedIn}/>
        <ContentPage isLoggedIn={isLoggedIn}/>
      </Container>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

function mapStateToProp(state){
  return {
    isLoggedIn: !!state.user._id
  }
}



export default connect(mapStateToProp)(App)
