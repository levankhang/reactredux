import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import './RegisterPage.css'
import {Grid, Image} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {register} from '../../../actions/auth'

class RegisterPage extends Component{
    submit = (data) => this.props.register(data);

    render(){
        return(

            <Grid>
                <Grid.Column width={12}>
                    <img className="ui image middle centered" src="images/introduct.png"/>
                </Grid.Column>

                <Grid.Column width={4}>
                    <RegisterForm submit={this.submit}/>
                </Grid.Column>
            </Grid>
        )


    }
}

RegisterPage.propTypes = {
  register: PropTypes.func.isRequired
}



export default connect(null, {register })(RegisterPage)

