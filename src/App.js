import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/login/Login';
import Register from './Components/register/Register'
import Header from './Components/header/Header'
import Dashboard from './Components/dashboard/Dashboard';
import ReadNow from './Components/readNow/ReadNow';
import Footer from './Components/footer/Footer';
class App extends React.Component {
  constructor(props) {
    // let isLoggedIn = false;
    super(props)
    this.state = {
      isRegistered: true
    }
  }



  render() {


    return (

      <Container>
        <Row>
          <Header ></Header>
        </Row>
        <Row>

          <Router >
            <Switch>

              <Route  path='/dashboard' component={Dashboard}></Route>
              <Route exact path='/' component={Login}></Route>
              <Route  path='/register' component={Register}></Route>
              <Route path='/readNow' component={ReadNow}></Route>

            </Switch>
          </Router>
        </Row>
        <Row>
          <Footer></Footer>
        </Row>

      </Container>


    )


  }

}
export default App;
