import React, { Component } from "react"

class TodoItem extends Component {
    constructor(props) {
        super()
    }
    
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.completed} />
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default TodoItem