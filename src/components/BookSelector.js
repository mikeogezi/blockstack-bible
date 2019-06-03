import React from 'react'

import M from 'materialize-css'

export default class BookSelector extends React.Component {
    constructor (props) {
        super(props)

        this.autocompleteRef = React.createRef()
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount () {
        M.AutoInit()
    }
    
    onAutoCompleteRef = (ref) => {
        let data = {}
        let books = []
        this.props.booksInfo.forEach((bookInfo) => {
            data[bookInfo.book] = null
            books.push(bookInfo.book)
        })

        let onAutocomplete = (book) => {
            this.props.onSelect(book, books.indexOf(book))
        }
        
        this.autocompleteRef = ref

        this.autocompleteInstance = M.Autocomplete.init(this.autocompleteRef, {
            data,
            onAutocomplete
        })
    }

    handleClick () {}

    render () {
        return (
            <div>
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">book</i>
                            <input 
                                ref={(ref) => this.onAutoCompleteRef(ref)} 
                                onClick={this.handleClick}
                                type="text" id="autocomplete-book" 
                                className="autocomplete no-autoinit" 
                            />
                            <label htmlFor="autocomplete-input">Select A Book</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}