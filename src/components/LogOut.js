import React from 'react'
import { UserSession } from 'blockstack';

export default class LogOut extends React.Component {
    constructor (props) {
        super(props)

        this.userSession = new UserSession()
    }

    componentWillMount () {
        this.userSession.signUserOut("/")
    }

    render () {
        return (
            <h2>Logging Out...</h2>
        )
    }
}