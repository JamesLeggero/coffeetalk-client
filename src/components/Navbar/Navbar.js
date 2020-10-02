import React from "react";
// import "./NavBar.css";

function Navbar(props) {
  let navBarItems = [
    <li key={1}>
      <a href="/">Home</a>
    </li>,
  ];
  if (props.roasterIsLoggedIn || props.farmerIsLoggedIn) {
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
      navBarItems.push(
        <li key={6}>
          <a href="/farmers/login">Farmer Log In</a>
        </li>
      );
  }

  return (
    <>
      <h1>Coffeetalk</h1>
      <nav>
         <ul>{navBarItems}</ul>
      </nav>
    </>
  );
}

export default Navbar;
