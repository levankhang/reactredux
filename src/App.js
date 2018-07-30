import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import ContentPage from './components/ContentPage/ContentPage'
import {Container} from 'semantic-ui-react'



class App extends Component {
  render() {
    return (
      <Container className="app">
        <Nav/>
        <ContentPage/>
      </Container>
    );
  }
}



export default App
