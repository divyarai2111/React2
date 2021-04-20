import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import loginService from '../../Services/loginservices'
import {BrowserRouter as  Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleUserInput = this.handleUserInput.bind(this)
    }


    registerUser = (event) => {
        event.preventDefault()
        console.log(this.state)

        loginService(this.state.username, this.state.password)
        // let auth=loginService.loginService()

    }



    handleUserInput = (event) => {
        // event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
      
        this.setState({
            [name]: value
        })
    }
    render() {

        return (
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" id="username" type="text" placeholder="Type  your username"
                        value={this.state.username} onChange={this.handleUserInput}   
                    ></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control name="password" id="password" type="password" placeholder="Type your password"
                        value={this.state.password} onChange={this.handleUserInput}
                    ></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control name="confirmPassword" id="confirmPassword" type="password" placeholder="enter your password once again"
                        value={this.state.password} onChange={this.handleUserInput}
                    ></Form.Control>
                </Form.Group>

                <Button variant="primary" onClick={this.registerUser}>Submit</Button>

                <Form.Group>
                    <Form.Label>Not a User ? </Form.Label>
                    <Router>
                        <Link to='/register'>
                            <Button variant="outlined" color="primary" size="small" >Register Now</Button>
                        </Link>

                    </Router>

                </Form.Group>


            </Form>


        )
    }

}

export default Register