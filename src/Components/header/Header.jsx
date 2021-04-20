import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';



class Header extends React.Component {

  constructor() {
    super()
  }

  // routeChange = () =>{ 
  //   // let history=useHistory()
  //   let path = `/readNow`; 
  //   this.props.history.push(path);
  // }

  routeChange() {

    let { history } = this.props;
    history.push({
      pathname: '/readNow'
    })
  }

  //  return  <Redirect to='readNow'></Redirect>
  // }
  render() {
    return (

      // <AppBar position="static">
      //   <Toolbar>
      //     <IconButton edge="start" color="inherit" aria-label="menu">
      //       <MenuIcon />
      //     </IconButton>
      //     <Button color="inherit"> Dashboard </Button>


      //       <Router>
      //       <Link to='/readNow'> Read Now
      //                    </Link>

      //     </Router>

          
      //     <Button color="inherit" onClick={this.routeChange}> ReadNow </Button>
      //     <Button color="inherit"> Logout </Button>

      //   </Toolbar>
      // </AppBar>

      <Navbar  bg="dark" variant="dark" className="justify-content-center"
     bg="dark" variant="dark">
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/readNow">Read Now</Nav.Link>
    
    </Nav>
   
  </Navbar.Collapse>
</Navbar>


    )
  }
}

export default Header