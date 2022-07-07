import React, { Component } from 'react'
import cart from '../SVG/AddToCart.svg'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../Redux/cartRedux';

//instance of component to enable using hocks.
const withHoc = Component => props => {
  const location = useLocation();
  const dispatch = useDispatch()
  const currency = useSelector(state => state.currency);
  return <Component {...props} location={location} dispatch = {dispatch} currency={currency}/>;
};

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Img = styled.img`
    width: 25px;
    height: 25px;
`

class CartAdd extends Component {
  constructor(props){
    super(props)
    this.handleProduct = this.handleProduct.bind(this);
  }

  handleProduct(){
    const idCart = Date.now();
    const quantity = 1
    const priceElement = this.props.product.prices.find(item => item.currency.label === this.props.currency.label);
    const price = priceElement.amount;
    const totalPrice = price * quantity;
    let atts = [];
    // eslint-disable-next-line
    this.props.product.attributes.map(attribute => {
    atts.push({[attribute.name]: attribute.items[0].value})
  })

  let attrubutes = atts.reduce((prev, current) => ({
    ...prev,
    ...current
  }));
  this.props.dispatch(
    addProduct({...this.props.product,idCart,price,quantity,totalPrice,...attrubutes})
  );
  }

  render() {
    return (
      <Container onClick={this.handleProduct}>
        <Img src={cart} alt="alt"/>
      </Container>
    )
  }
}

export default withHoc(CartAdd)
