import React, { Component } from "react"

class TodoItem extends Component {
    constructor(props) {
        super()
    }
    
    render() {
        return (
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={this.props.item.completed} 
                    onChange={() => this.props.handleChange(this.props.item.id)}
                />
                <p>{this.props.item.text}</p>
            </div>
        )
    }
}

// function TodoItem(props) {
//     return (
//         <div className="todo-item">
//             <input 
//                 type="checkbox" 
//                 checked={props.item.completed} 
//                 onChange={() => props.handleChange(props.item.id)}
//             />
//             <p>{props.item.text}</p>
//         </div>
//     )
// }

export default TodoItem