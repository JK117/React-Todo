import React, { Component } from "react"

import './App.css'

import Joke from './components/Joke'
import jokesData from './data/jokesData'
import Product from './components/Product'
import productData from './data/productsData'
import TodoItem from './components/TodoItem'
import todosData from './data/todosData'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

class App extends Component {
    constructor(props) {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    console.log(`TodoItem ${id} props.completed change from ${todo.completed} to ${!todo.completed}`)
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const jokesComponents = jokesData.map(item => <Joke key={item.id} question={item.question} answer={item.punchLine} />)
        const productComponents = productData.map(item => <Product key={item.id} product={item} />)
        const todoComponents = this.state.todos.map(item => <TodoItem 
            key={item.id} 
            item={item} 
            handleChange={this.handleChange}
        />)

        return (
            <div>
                <div className="todo-list">
                    {todoComponents}
                </div>
                <hr />
                <div className="product-list">
                    {productComponents}
                </div>
                <hr/>
                <div className="joke-list">
                    {jokesComponents}
                </div>
            </div>
        )
    }
}

export default App
