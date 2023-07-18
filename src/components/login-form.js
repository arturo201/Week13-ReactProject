import React from 'react';
import { useState } from 'react';

// Define a functional component called LoginForm
const LoginForm = () => {
    // Declare a state variable 'message' and a function 'setMessage' to update its value
    const [message, setMessage] = useState('');

    // Define a function 'handleChange' to handle changes in the input fields
    const handleChange = (event) => {
        // Update the 'message' state with the new value from the input field
        setMessage(event.target.value);
    };

    // The component renders the following JSX content
    return (
        <div className='login-form'>
            {/* Heading for the login form */}
            <h3 className='login-heading'>Log In</h3>
            {/* Form group for the username input */}
            <div className='form-group'>
                <label htmlFor='username' placeholder=' '>Username</label>
                {/* Input field for the username with value bound to the 'message' state */}
                <input type='text' id='username' onChange={handleChange} value={message}/>
            </div>
            {/* Form group for the password input */}
            <div className='form-group'>
                <label htmlFor='password' placeholder=' '>Password</label>
                {/* Input field for the password with value bound to the 'message' state */}
                <input type='password' id='password' onChange={handleChange} value={message} />
            </div>
            {/* Button to submit the form and reset the 'message' state */}
            <div>
                <button className='button' type='submit' onClick={() => setMessage('')}>Submit</button>
            </div>
        </div>
    );
};

// Export the LoginForm component to make it available for other parts of the application
export default LoginForm;
