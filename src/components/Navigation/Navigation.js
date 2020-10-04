import React from "react";
import { Switch, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import "./NavBar.css";
import Navbar from 'react-bootstrap/Navbar'

function Navigation(props) {
  let navBarItems = [
    <li key={1}>
      <a href="/">Home</a>
    </li>,
  ];
  if (props.roasterIsLoggedIn === true) {
    navBarItems.push(
      <li key={2}>
        <a href="/logout" onClick={props.handleLogOut}>Log Out</a>
      </li>
    );
  } else {
    navBarItems.push(
      <li key={3}>
        <a href="/roasters/signup">Roaster Sign Up</a>
      </li>
    );
    navBarItems.push(
      <li key={4}>
        <a href="/roasters/login">Roaster Log In</a>
      </li>
    );
    navBarItems.push(
        <li key={5}>
          <a href="/farmers/signup">Farmer Sign Up</a>
        </li>
      );
  }

  return (
    
      <Navbar sticky='top' variant='dark' bg='dark' text='white' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          {
              props.roasterIsLoggedIn?
            <Nav.Link href='/'>{props.roasterState.username} is using Coffeetalk</Nav.Link> :


              <Nav.Link href='/'>Coffeetalk</Nav.Link>

          }
         
         
          {
              props.roasterIsLoggedIn === true ?
              <Nav.Link href='/logout' >
                  <div onClick={props.handleLogOut}>
                      Log Out
                </div></Nav.Link>
              :
              
              <NavDropdown title='Sign Up/Log In'>
                  <NavDropdown.Item href='/roasters/login'>Roaster Log In</NavDropdown.Item>
                  <NavDropdown.Item href='/roasters/signup'>Roaster Sign Up</NavDropdown.Item>
                  <NavDropdown.Item href='/farmers/signup'>Farmer Sign Up</NavDropdown.Item>
              </NavDropdown>
              
          }
        {/*  <ul>{navBarItems}</ul> */}
          
        </Navbar>

  );
}

export default Navigation;
