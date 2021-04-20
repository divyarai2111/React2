import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import loginService from '../../Services/loginservices'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            token: ''
        }
        this.handleUserInput = this.handleUserInput.bind(this)
    }

    componentWillMount() {

    }


    loginUser = (event) => {
        event.preventDefault()
        // console.log(this.state)

        let auth = loginService(this.state.username, this.state.password)
        // console.log(auth)
        auth.then((data) => {
            // console.log("hdjhjsa")
            // console.log(data)
            if (data.token != undefined) {
                // console.log(data.token);
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', this.state.username)
                this.setState({
                    token: data.token
                })

                let { history } = this.props;
                history.push({
                    pathname: '/dashboard'
                })
            } else {
                alert("Username and Password is invalid");

            }
        }, (err) => {


        })



    }


    handleUserInput = (event) => {
        // event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        // console.log(event.target)
        this.setState({
            [name]: value
        })
    }

    registerUser = (event) => {


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

                <Button variant="primary" onClick={this.loginUser}>Submit</Button>

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

export default Login