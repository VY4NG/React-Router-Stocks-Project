import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import LoginForm from './components/pages/LoginForm';
import SignupForm from './components/pages/SignupForm';
import HomePage from './components/pages/home/HomePage';
import TrackedPositions from './components/pages/tracked-positions/Positions';
import FriendsList from './components/pages/FriendsList';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  ButtonGroup,
  Container
} from 'react-bootstrap';

export default function App() {
  return (
    // Your entire App.js is the router.
    <Container>
      <Router>
        {/* This is your Nav element, that users can see. */}
        <div>
          <nav className='navBar'>
            <ButtonGroup className='full-width-button-group'>
              <Button variant='outline-success'>
                <Link to='/login' className='btn-link'>Log In</Link>
              </Button>
              <Button variant='outline-success'> 
                <Link to='/sign-up' className='btn-link'>Sign Up</Link>
              </Button>
              <Button variant='outline-success'>
                <Link to='/home' className='btn-link'>Home Page</Link>
              </Button>
              <Button variant='outline-success'>
                <Link to='/tracked-positions' className='btn-link'>Tracked Positions</Link>
              </Button>
              <Button variant='outline-success'>
                <Link to='/friends' className='btn-link'>Friends List</Link>
              </Button>
            </ButtonGroup>
          </nav>
          <br></br>

          {/* This is the logic that switches each path.
          1. Give your Route component a path attribute so users know where they are.
              This is linked directly with "to attribute" on your nav above.
          2. Inside that Route component, render the component you want users
              to see when they click on that route.
          <Route path="/">
            <Component/>
          </Route>  */}

          <br></br>
          <Switch>
            <Route path='/login'>
              <LoginForm />
            </Route>
            <Route path='/sign-up'>
              <SignupForm />
            </Route>
            <Route path='/home'>
              <HomePage />
            </Route>
            <Route path='/tracked-positions'>
              <TrackedPositions />
            </Route>
            <Route path='/friends'>
              <FriendsList />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  )
}
