import React from 'react'

function RoasterSignUp(props) {

    return (
        <>
            <form
            onSubmit={props.handleRoasterSignup}
            >
                <input type='text' name='username' placeholder='Username' onChange={props.handleRoasterInput}/>
                <input type='password' name='password' placeholder='Password' onChange={props.handleRoasterInput}/>
                <input type='submit' value='Sign Up for CT' />





            </form>

        </>
    )
}

export default RoasterSignUp