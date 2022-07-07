import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import Add from '../../icons/Add-Remove/Add';
import Remove from '../../icons/Add-Remove/Remove';
import { 
  AmountContainer, 
  AmountText, 
  Attribute, 
  AttributeElement, 
  AttributeTitle, 
  AttributeWrapper, 
  BottomContainer, 
  CartContainer, 
  ColorElement, 
  Container, 
  Details,  
  EmptyCartContainer, 
  EmptyCartText, 
  IconContaner, 
  Image, 
  ImageContainer, 
  Info, 
  ItemContainer, 
  Name, 
  OrderButton, 
  Price, 
  Quant, 
  Quantity, 
  ShopLink, 
  Tax, 
  Title, 
  TopContainer, 
  Total, 
  Wrapper 
} from './CartElements'
import { updateProductQuantity } from '../../Redux/cartRedux';

//instance of component to enable using hocks.
const withHoc = Component => props => {
  const location = useLocation();
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart);
  const currency = useSelector(state =>state.currency)
  return <Component {...props} location={location} dispatch = {dispatch} cart = {cart} currency={currency}/>;
};


class Cart extends Component {
  constructor(props){
    super(props)
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  //set quantity in cart.
  handleQuantity = (type,id)=> {
    this.props.dispatch(
      updateProductQuantity({type,id})
    )
  };

  render() {
    const cart = this.props.cart;
    const currency = this.props.currency;
    const tax = 0.21;
    const total = cart.total + (cart.total * tax)
    return (
      <Container>
        <Wrapper>
          <Title>Cart</Title>
          <CartContainer>
            <TopContainer>
              {cart.products.map(product => {
                return(
                  <ItemContainer key={product.idCart}>
                  <Info>
                    <Details>
                      <Link style={{textDecoration:"none",color:"black"}} to={`/product/${product.id}`}>
                        <Name>{product.name}</Name>
                      </Link> 
                      <Price>{currency.symbol}{Math.floor(product.totalPrice)}</Price>
                      {
                        product.attributes.map(attribute => {
                          return (
                            <Attribute key={attribute.id}>
                              <AttributeTitle>{attribute.name}</AttributeTitle>
                              <AttributeWrapper data-parent= {attribute.name}>
                                {
                                  attribute.items.map(item => {
                                    if(attribute.name === "Color"){
                                      return(
                                        <ColorElement
                                          key={item.id}
                                          data-value={item.value}
                                          value={item.value} 
                                          selectedAttribute={product[attribute.name]}
                                        >
                                        </ColorElement>
                                      )
                                    }else{
                                      return(
                                        <AttributeElement
                                          key={item.id}
                                          data-value={item.value}
                                          value={item.value} 
                                          selectedAttribute={product[attribute.name]}
                                          >
                                            {item.value}
                                        </AttributeElement>
                                      )
                                    }
                                  })
                                }
                              </AttributeWrapper>
                            </Attribute>              
                          )
                        })
                      }
                    </Details>
                    <Quantity>
                      <IconContaner onClick={()=> this.handleQuantity("inc",product.idCart)} >
                          <Add/>
                      </IconContaner>
                      <AmountContainer>
                          <AmountText>{product.quantity}</AmountText>
                      </AmountContainer>
                      <IconContaner onClick={()=> this.handleQuantity("dec",product.idCart)}>
                          <Remove/>
                      </IconContaner>                   
                  </Quantity>
                  </Info>
                  <ImageContainer>
                    <Image src={product.gallery[0]} alt='img'/>
                  </ImageContainer>
                </ItemContainer>
                )
              })}
            </TopContainer>
            <BottomContainer>
              {cart.quantity > 0
                ?<>
                  <Tax>Tax 21%: <b>{currency.symbol}{Math.floor(tax * cart.total)}</b></Tax>
                  <Quant>Quantity: <b>{cart.quantity}</b></Quant>
                  <Total><b>Total: {currency.symbol}{Math.floor(total)}</b></Total>
                  <OrderButton>Order</OrderButton>
                </>
                :<EmptyCartContainer>
                    <EmptyCartText>Your cart is empty</EmptyCartText>
                    <Link to={'/'}>
                      <ShopLink>Shop today's deals</ShopLink>
                    </Link>  
                </EmptyCartContainer>
              }  
            </BottomContainer>
          </CartContainer>
        </Wrapper>        
      </Container>
    )
  }
}
export default withHoc(Cart);