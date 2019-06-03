import React from 'react';

import './App.css';

import Index from './components/Index'
import BiblePassage from './components/BiblePassage'
import About from './components/About'
import Bookmarks from './components/Bookmarks'

import SignIn from './components/SignIn'
import LogOut from './components/LogOut'

import { UserSession } from 'blockstack'

import { 
  BrowserRouter as Router, 
  Route, 
  Link 
} from 'react-router-dom'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.userSession = new UserSession()
  }

  render () {
    return (
      <Router>
        <div className="App">
          <nav className="blue">
            <div className="nav-wrapper nav-padding">
            {
              false &&
              <a href="#!" className="brand-logo hide-on-small-only">Bible App</a>
            }
            <ul className="left">
              <li>
                <Link to="/">
                  <i className="material-icons left">book</i><b>Bible</b>
                </Link>
              </li>
              <li>
                <Link to="/bookmarks/">
                  <i className="material-icons left">bookmark_border</i><b>Bookmarks</b>
                </Link>
              </li>
              <li>
                <Link to="/about/">
                  <i className="material-icons left">info_outline</i><b>About</b>
                </Link>  
              </li>
              {
                this.userSession.isUserSignedIn() &&
                <li><Link to="/log-out/">Log Out</Link></li>
              }
            </ul>
            </div>
          </nav>

          <div className="container">
            <Route path="/" exact component={Index} />
            <Route path="/bible/:book/:chapter/:verse?/" component={BiblePassage} />
            <Route path="/bookmarks/" component={Bookmarks} />
            <Route path="/about/" component={About} />
            <Route path="/sign-in/" component={SignIn} />
            <Route path="/log-out/" component={LogOut} />
          </div>
          
        </div>
      </Router>
    );
  }
}
