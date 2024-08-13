import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Sign up form needs state in order to confirm that passords match.
export default function SignupForm() {

    // State to hold the values of inputs for username and password.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle form submission.
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate if passwords match.
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Clear error and proceed to submit form.
        setError('');
        alert('Sign up successful.')

        // Clear the input fields after successful sign up.
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    }

    // Use React Bootstrap for styling.
    return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className='card p-4' style={{ maxWidth: '400px', width: '100%' }}>
                <h3 className='card-title text-center mb-4'>Create an account</h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <div className='mb-3'>
                            <label htmlFor='username' className='form-label'>Username</label>
                            <input
                                type='text'
                                id='username'
                                className='form-control'
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input
                                type='password'
                                id='password'
                                className='form-control'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='confirm-password' className='form-label'>Confirm Password</label>
                            <input
                                type='password'
                                id='confirm-password'
                                className='form-control'
                                placeholder='Confirm Password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        {error && <div className='alert alert-danger'>{error}</div>}
                        <button type='submit' className='btn btn-primary w-100'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}