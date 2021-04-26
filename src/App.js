import React, { Component } from "react"
import { Switch, Route, Link } from "react-router-dom"
import randomcolor from "randomcolor"

import './App.css'

import Joke from './components/Joke'
import jokesData from './data/jokesData'
import Product from './components/Product'
import productData from './data/productsData'
import TodoItem from './components/TodoItem'
import todosData from './data/todosData'
import Loading from './components/Loading'

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
            todos: todosData,
            count: 0,
            color: "",
            isLoading: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.increment = this.increment.bind(this)
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

    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1,
                // color: randomcolor()
            }
        })
    }

    componentDidMount() {
        console.log("Mounting...")
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
            console.log("Mounted")
        }, 3000)
    }

    componentDidUpdate(prevProps, prevStates) {
        if (prevStates.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})
            console.log(`Updated. New color ${newColor} created.`)
        }
    }

    render() {
        const jokesComponents = jokesData.map(item => <Joke key={item.id} joke={item} />)
        const productComponents = productData.map(item => <Product key={item.id} product={item} />)
        const todoComponents = this.state.todos.map(item => <TodoItem 
            key={item.id} 
            item={item} 
            handleChange={this.handleChange}
        />)

        console.log("Rendered")
        console.log(this.state.color)

        if (this.state.isLoading === true) {
            return (<Loading />)
        } else {
            return (
                <div className="App">
                    <div className="App-header">
                        <h1>Test Field</h1>
                        <p>To guide you into the world of Pokemon</p>
                    </div>

                    <div className="flex-container">
                        <div className="flex-item increment">
                            <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                            <p>Color: {this.state.color}</p>
                            <button onClick={this.increment}>
                                Increment!
                            </button>
                        </div>
                        <div className="flex-item todo-list">
                            {todoComponents}
                        </div>
                        <hr />
                        <div className="flex-item product-list">
                            {productComponents}
                        </div>
                        <hr/>
                        <div className="flex-item joke-list">
                            {jokesComponents}
                        </div>
                    </div>
                </div>
                
            )
        }
    }
}

export default App
