import React from 'react';
import Posts from './Posts';
import './HomePage.css';

/* Create date variable with JavaScript's built-in 'Date' method.
This creates a new 'Date' object representing the current date
and time. */
let date = new Date()

// Setting my name as the user.
let singleUser = {
    name: 'Va',
    time: date.toDateString(),
}

export default function HomePage() {
    return (
        <div>
            <div className='welcomeSection'>
                <h1>Welcome, {singleUser.name}</h1>
                <p>Today's date is: {singleUser.time}</p>
            </div>
            <br></br>
            <br></br>
            <div>
                <Posts />
            </div>
        </div>
    )
}