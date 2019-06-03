import React from 'react'

import M from 'materialize-css'

export default class VerseSelector extends React.Component {
    constructor (props) {
        super(props)

        this.state = {}

        this.inputRef = React.createRef()
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount () {
        M.AutoInit()
    }

    onInputRef (ref) {
        let data = {}
        for (let i = 0; i < this.props.verses; ++i) {
            data[`${i}`] = null
        }

        let onAutocomplete = (verse) => {
            this.props.onSelect(parseInt(verse))
        }

        this.inputRef = ref
        this.inputInstance = M.Autocomplete.init(this.inputRef, {
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
                            <i className="material-icons prefix">format_list_numbered</i>
                            <input 
                                ref={(ref) => this.onInputRef(ref)} 
                                onClick={this.handleClick}
                                type="number" id="autocomplete-verse" 
                                className="autocomplete no-autoinit"
                            />
                            <label htmlFor="autocomplete-input">Select A Verse</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}