import React from 'react'

import Verse from '../components/Verse'

import bible from '../data/kjv'

import { UserSession } from 'blockstack'

export default class BiblePassage extends React.Component {
    constructor (props) {
        super(props)

        this.props.match.params.book = this.props.match.params.book.replace(/-/gi, ' ')

        let { book, chapter, verse } = this.props.match.params
        this.state = {
            book,
            chapter, 
            verse
        }
        this.chapterData = bible[book][chapter]

        this.userSession = new UserSession()
    }

    componentWillMount () {
        let session = this.userSession
        if (session.isUserSignedIn()) {
            console.log('User signed in')
        }
        else if (!session.isUserSignedIn() && session.isSignInPending()) {
          session.handlePendingSignIn()
            .then((userData) => {
                console.log(userData)
            })
        }
        else {
            this.props.history.push('/sign-in')
        }
    }

    render () {
        return (
            <div>
                <h2>{this.state.book} {this.state.chapter}</h2>
                <div>
                    {
                        Object.keys(this.chapterData).map((key) => (
                            <Verse
                                key={key}
                                num={key}
                                verse={this.chapterData[key]}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}