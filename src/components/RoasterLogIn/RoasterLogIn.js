import React from "react";

function RoasterLogIn(props) {
  return (
    <div>
      <h2>Log In</h2>

      <form onSubmit={props.handleRoasterLogIn}>
        <div>
          
          <input type="text" name="username" placeholder='Username'onChange={props.handleRoasterInput} />
        </div>
        <div>
          
          <input type="password" placeholder='Password' name="password" onChange={props.handleRoasterInput} />
        </div>
        <input value="Log In" type="submit" />
      </form>
    </div>
  );
}

export default RoasterLogIn;
