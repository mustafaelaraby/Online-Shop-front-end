import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Cart from './pages/Cart/Cart'
import Product from './pages/PDP/Product'
import ProductList from './pages/PLP/ProductList'
import { ApolloClient , ApolloProvider, InMemoryCache} from '@apollo/client'
const client = new ApolloClient({
  uri:"http://localhost:4000/",
  cache: new InMemoryCache()
})


export class App extends PureComponent {
    
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path = '/'                   element = {<Navigate to='/products/all'/>}/>
            <Route exact path = '/products/:category' element = {<ProductList/>}/>
            <Route exact path = '/product/:id'        element = {<Product/>}/>
            <Route exact path = '/cart'               element = {<Cart/>}/>
          </Routes>
        </Router>  
      </ApolloProvider>
      
    )
  }
}

export default App