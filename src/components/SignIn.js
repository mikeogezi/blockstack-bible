import React from 'react'

import { 
    UserSession,
    AppConfig
} from 'blockstack';

import { SignInBlockstackButton, SignInBlockstackLiteButton } from 'blockstack-signin-btn'

export default class SignIn extends React.Component {
    constructor (props) {
        super(props)

        this.appConfig = new AppConfig()
        this.userSession = new UserSession({
            appConfig: this.appConfig
        })

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.userSession.redirectToSignIn()
    }

    render () {
        return (
            <div className="center container">
                <h2>Sign In</h2>
                <button className="btn-large blue" onClick={this.handleClick}>
                    Sign In With Blockstack
                    <i className="material-icons left">open_in_new</i>
                </button>
                <div className="row"></div>
                <SignInBlockstackButton
                    includeBlockstackLogo={false}
                />
            </div>
        )
    }
}