import React, { Component } from "react"

class Product extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <h2>{this.props.product.name}</h2>
                <p>{this.props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}
                 - {this.props.product.description}</p>
            </div>
        )
    }
}

export default Product