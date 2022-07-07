import React, { Component } from 'react'
import Logo from '../../icons/Logo/Logo'
import{
  Container,
  Wrapper,
  Left,
  Categories,
  Category,
  Center,
  Right,
  CenterContainer,
  RightElements,
  CartContainer,
  CategoryText,
  CartBadge,
} from './NavBarElements'
import CartLogo from '../../icons/Cart/CartLogo'
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter'
import CartOverlay from '../CartOverlay/CartOverlay'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//instance of component to enable using hocks.
const withHoc = Component => props => {
  const cart = useSelector(state => state.cart);
  return <Component {...props} cart = {cart}/>;
};

 class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false,
    }
  }


  render() { 
    return (
      <Container>
          <Wrapper>
              <Left>
                  <Categories>
                        <Category  to={"/products/all"} ><CategoryText>All</CategoryText></Category>
                        <Category  to={"/products/clothes"} ><CategoryText>Clothes</CategoryText></Category>
                        <Category  to={"/products/tech"} ><CategoryText>Tech</CategoryText></Category>                          
                  </Categories>
              </Left>
                <Center>
                  <CenterContainer>
                    <Link to={'/'}>
                      <Logo/>
                    </Link>
                   
                  </CenterContainer>
                </Center>
              <Right>
                <RightElements>
                  <CurrencyConverter />
                  <CartContainer
                      onMouseEnter={() => this.setState({ bool: true })}
                      onMouseLeave={() => this.setState({ bool: false })}>
                      <Link to={'/cart'}>
                        <CartLogo/>
                        {
                          (this.props.cart.quantity > 0) &&
                          <CartBadge>{this.props.cart.quantity}</CartBadge>
                        }
                      </Link>
                    {this.state.bool && <CartOverlay/>}
                  </CartContainer>
                </RightElements>
              </Right>
          </Wrapper>
      </Container>
    )
  }
}

export default withHoc(NavBar);