import React from 'react'

import Verse from '../components/Verse'

import bible from '../data/kjv'

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