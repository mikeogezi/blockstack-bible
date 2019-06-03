import React from 'react'

import { UserSession } from 'blockstack';

export default class Bookmarks extends React.Component {
    constructor (props) {
        super(props)

        this.userSession = new UserSession()
    }

    componentWillMount () {
        let session = this.userSession
        if(!session.isUserSignedIn() && session.isSignInPending()) {
          session.handlePendingSignIn()
            .then((userData) => {
                console.log(userData)
                // continue
            })
        }
        else {
            this.props.history.push('/sign-in')
        }
    }

    render () {
        return (
            <div>
                <h2>Bookmarks</h2>
            </div>
        )
    }
}