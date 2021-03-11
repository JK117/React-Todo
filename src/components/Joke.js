import React, { Component } from "react"

class Joke extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <h3 style={{display: !this.props.question && "none"}}>Question: {this.props.question}</h3>
                <h3 style={{color: !this.props.question && "#888888"}}>Answer: {this.props.answer}</h3>
                <hr/>
            </div>
        )
    }
}

export default Joke