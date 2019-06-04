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

    this.state = {
      signedIn: false
    }

    this.userSession = new UserSession()
  }

  componentDidMount () {
    this.timeout = setTimeout(() => {
      if (this.userSession && this.userSession.isUserSignedIn() && !this.state.signedIn) {
        this.setState({
          signedIn: true
        })
      }
    }, 3000)
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
              {
                this.userSession.isUserSignedIn() &&
                <li>
                  <Link to="/log-out/">
                    <i className="material-icons left">open_in_new</i>
                    <b>Log Out</b>
                  </Link>
                </li>
              }
              <li>
                <Link to="/about/">
                  <i className="material-icons left">info_outline</i><b>About</b>
                </Link>  
              </li>
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

  componentWillUnmount () {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }
}
