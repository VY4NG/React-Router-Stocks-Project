import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Use React Bootstrap for styling.
export default function LoginForm() {
    return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className='card p-4' style={{ maxWidth: '400px', width: '100%' }}>
                <h3 className='card-title text-center mb-4'>Welcome back</h3>
                <form>
                    <div className='mb-3'>
                        <div className='mb-3'>
                            <label htmlFor='username' className='form-label'>Username</label>
                            <input
                                type='text'
                                id='username'
                                className='form-control'
                                placeholder='Username'
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input
                                type='password'
                                id='password'
                                className='form-control'
                                placeholder='Password'
                            />
                        </div>
                        <button type='submit' className='btn btn-primary w-100'>
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}