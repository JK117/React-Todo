import './App.css'

import Joke from './components/Joke'
import jokesData from './data/jokesData'
import Product from './components/Product'
import productData from './data/productsData'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

function App() {
    const jokesComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.punchLine} />)
    const productComponents = productData.map(item => <Product key={item.id} product={item} />)
    return (
        <div>
            {productComponents}
            <hr/>
            {jokesComponents}
        </div>
    )
}

export default App
