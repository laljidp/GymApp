import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import './login.scss'

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        axios.post('http://localhost:4000/auth/login', values)
          .then((res, err) => {
            console.log('res', res)
            console.log('err', err)
            if (res.data.token) {
              window.localStorage.setItem('Token', res.data.token)
              this.props.history.push('/dashboard')
            } else {
              message.error('Login failed..')
            }
          })
          .catch(err => {
            console.log('err', err)
            message.error('Invalid credentials')
          })
      }
    })
  };

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='login-container'>
        <div className='login-div'>
          <Form onSubmit={this.handleSubmit} className='login-form'>
            <span>
              My Fitness Gym
            </span>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }]
              })(
                <Input
                  prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='Username'
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }]
              })(
                <Input
                  prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type='password'
                  placeholder='Password'
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className='login-form-forgot' href='/forgotPassword'>
            Forgot password
              </a>
              <br />
              <Button type='primary' htmlType='submit' className='login-form-button'>
            Log in
              </Button>
              <br />
          Or <a href='/Register'>register now!</a>
            </Form.Item>
          </Form>
        </div>

      </div>

    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm)

export default withRouter(WrappedNormalLoginForm)
