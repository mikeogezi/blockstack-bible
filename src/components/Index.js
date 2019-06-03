import React from 'react'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'

import booksInfo from '../data/books'

import BookSelector from '../components/BookSelector'
import ChapterSelector from '../components/ChapterSelector'
import VerseSelector from '../components/VerseSelector'

import OpenPassageButton from '../components/OpenPassageButton'

import { UserSession } from 'blockstack'

export default class Index extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            book: "",
            bookIndex: -1,
            chapter: 1,
            verse: 0
        }

        this.onSelectBook = this.onSelectBook.bind(this)
        this.onSelectChapter = this.onSelectChapter.bind(this)
        this.onSelectVerse = this.onSelectVerse.bind(this)

        this.userSession = new UserSession()
    }

    componentWillMount () {
        // let session = this.userSession
        // if(!session.isUserSignedIn() && session.isSignInPending()) {
        //   session.handlePendingSignIn()
        //     .then((userData) => {
        //         console.log(userData)
        //         // continue
        //     })
        // }
        // else {
        //     this.props.history.push('/sign-in')
        // }
    }

    componentDidMount () {
        M.AutoInit()
    }

    onSelectBook (book, i) {
        console.log(`Book of ${book} was selected`)
        this.setState({
            book,
            bookIndex: i
        })
    }

    onSelectChapter (chapter) {
        console.log(`Chapter ${chapter} was selected`)
        this.setState({
            chapter
        })
    }

    onSelectVerse (verse) {
        console.log(`Verse ${verse} was selected`)
        this.setState({
            verse
        })
    }

    hasBook () {
        return !!(this.state && this.state.book)
    }

    hasChapter () {
        return !!(this.state && this.state.chapter)
    }

    render () {
        return (
            <div>
              <h2>Bible</h2>
              <div>
                <BookSelector 
                    booksInfo={booksInfo} 
                    onSelect={(book, i) => this.onSelectBook(book, i)} 
                />
                {
                    this.hasBook() &&
                    <ChapterSelector
                        chapters={booksInfo[this.state.bookIndex].chapters.length}
                        onSelect={(chapter) => this.onSelectChapter(chapter)}
                    />
                }
                {
                    this.hasBook() && this.hasChapter() &&
                    <VerseSelector
                        verses={parseInt(booksInfo[this.state.bookIndex].chapters[this.state.chapter].verses)}
                        onSelect={(verse) => this.onSelectVerse(verse)}
                    />
                }
                {
                    this.hasBook() &&
                    <OpenPassageButton history={this.props.history} {...this.state} />
                }
              </div>
            </div>
        )
    }
}