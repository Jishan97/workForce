import React from 'react';
import {Nav, Navbar, NavbarBrand,NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom'

const NavigationBar = ()=>{
    return(
        <div>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand href="/">
            WorkForce
          </NavbarBrand>
          <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink>
          <Link to="/" style={{textDecoration:'none', color:'black'}}>HOME </Link>
          </NavLink>
        </NavItem>

        {/* <NavItem>
          <NavLink>
          <Link to="/" style={{textDecoration:'none', color:'black'}}>Request Leave </Link>
          </NavLink>
        </NavItem> */}


            </Nav>



            <NavLink >
            <Link to="/login" style={{textDecoration:'none', color:'black'}}>Login </Link>

          </NavLink>


          <NavLink >
          <Link to="/register" style={{textDecoration:'none', color:'black'}}>Register </Link>

          </NavLink>
            
        </Navbar>
      </div>
    )
}

export default NavigationBar;