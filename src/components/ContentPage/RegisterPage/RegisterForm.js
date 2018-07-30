import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import Validator from 'validator'
import './RegisterPage.css'


class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        name: '',
        email: '',
        password: '',
        repassword: ''
      },
      loading: false,
      errors: {}
    }
  }

  onChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }


  onSubmit = () => {
    const errors = this.validate(this.state.data);

    this.setState({
      errors
    });

    if (Object.keys(errors).length === 0) {
      this.setState({
        loading: true
      })

      this.props.submit(this.state.data).catch(err => this.setState({ errors: err.response.data.errors, loading: false }))
    }


  }

  validate(data) {
    const { name, email, password, repassword } = data;
    let errors = {}

    if (!name)
      errors.name = "Name can't be blank"
    if (!Validator.isEmail(email))
      errors.email = "Invalid email"
    if (!password)
      errors.password = "Password can't be blank"
    if (repassword != password)
      errors.repassword = "Password does not match"

    return errors;
  }


  render() {
    const { errors, loading, data } = this.state
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <h2>Register </h2>
        <Form.Field error={!!errors.name}>
          <label>Name</label>
          <input placeholder="Your full name"
            name="name"
            value={data.name}
            onChange={this.onChange}
          />

          {errors.name &&
            <Message negative>
              <Message.Header>Name error:</Message.Header>
              <p>{errors.name}</p>
            </Message>
          }

        </Form.Field>

        <Form.Field error={!!errors.email}>
          <label>Email</label>
          <input type="email"
            placeholder="example@example.com"
            name="email"
            value={data.email}
            onChange={this.onChange}
          />

          {errors.email &&
            <Message negative>
              <Message.Header>Email error:</Message.Header>
              <p>{errors.email}</p>
            </Message>
          }
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label>Password</label>
          <input type="password"
            placeholder="Enter password"
            name="password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password &&
            <Message negative>
              <Message.Header>Password error:</Message.Header>
              <p>{errors.password}</p>
            </Message>
          }
        </Form.Field>

        <Form.Field error={!!errors.repassword}>
          <label>Password again</label>
          <input type="password"
            placeholder="Enter password"
            name="repassword"
            value={data.repassword}
            onChange={this.onChange}
          />
          {errors.repassword &&
            <Message negative>
              <Message.Header>Password error:</Message.Header>
              <p>{errors.repassword}</p>
            </Message>
          }
        </Form.Field>

        <Button>Register</Button>
      </Form>

    )
  }
}

export default RegisterForm