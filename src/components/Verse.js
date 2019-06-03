import React from 'react'

export default class Verse extends React.Component {
    render () {
        return (
            <div className="col s12">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">
                            <b><small>{this.props.num}</small></b>
                        </span>
                        <p>
                            {this.props.verse}
                        </p>
                    </div>
                    <div className="card-action">
                        <button className="btn white blue-text" href="#!">
                            Bookmark
                            <i className="material-icons left small">book</i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}