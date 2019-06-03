import React from 'react'

export default class OpenPassageButton extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        let { book, chapter, verse } = this.props
        this.openPassage(book, chapter, verse)
    }

    openPassage (book, chapter, verse) {
        book = book.replace(/ /gi, '-')
        this.props.history.push(`/bible/${book}/${chapter}/${verse || ''}`)
    }

    render () {
        return (
            <button className="btn-large blue" onClick={this.handleClick}>
                Open Passage
                <i className="material-icons left">arrow_forward</i>
            </button>
        )
    }
}