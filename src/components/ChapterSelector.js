import React from 'react'

import M from 'materialize-css'

export default class ChapterSelector extends React.Component {
    constructor (props) {
        super(props)

        this.state = {}

        this.inputRef = React.createRef()
    }

    componentDidMount () {
        M.AutoInit()
    }

    onInputRef (ref) {
        let data = {}
        for (let i = 0; i < this.props.chapters; ++i) {
            data[`${i}`] = null
        }
        // console.log(data)
        let onAutocomplete = (chapter) => {
            this.props.onSelect(parseInt(chapter))
        }

        this.inputRef = ref
        M.Autocomplete.init(this.inputRef, {
            data,
            onAutocomplete
        })
    }

    render () {
        return (
            <div>
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">view_agenda</i>
                            <input ref={(ref) => this.onInputRef(ref)} type="number" id="autocomplete-chapter" 
                                className="autocomplete no-autoinit" 
                            />
                            <label htmlFor="autocomplete-input">Select A Chapter</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}