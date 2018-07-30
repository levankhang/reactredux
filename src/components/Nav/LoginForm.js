import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'


class LoginForm extends Component{

    constructor(props){
      super(props)

      this.state = {
        data: {
          email: '',
          password: ''
        },
        errors: {},
        loading: false
      }

    }

    onSubmit = () => {
      this.setState({loading: true})
      this.props.submit(this.state.data).catch(err => this.setState({errors: err.response.data.errors}))
    }

    onChange = (e) => {
      this.setState({
          data: {...this.state.data, [e.target.name]: e.target.value}
      })
    }

    render(){
        const { errors } = this.state
      console.log(errors)
        return(
            <Form onSubmit={this.onSubmit} style={{display: 'flex', alignItems: 'center'}}>
                <Form.Field className="form-field">
                    <label>Email</label>
                    <input type="email"
                           placeholder="example@example.com"
                           name="email"
                           onChange={this.onChange}
                           value={this.state.data.email}

                    />
                  {!!errors.email && <Label basic color='red' pointing>
                    {errors.email}
                  </Label>
                  }

                </Form.Field>

                <Form.Field className="form-field">
                    <label>Password</label>
                    <input type="password"
                           placeholder="enter your password"
                           name="password"
                           onChange={this.onChange}
                           value={this.state.data.password}
                    />
                  {!!errors.password && <Label basic color='red' pointing>
                    {errors.password}
                  </Label>
                  }
                </Form.Field>

                <Form.Field className="form-field">
                    <Button className="ui primary button">Login</Button>
                </Form.Field>
            </Form>
        )
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}


export default LoginForm