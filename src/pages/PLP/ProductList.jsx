import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { CartIconContainer, Container, HoverStyle, Image, ImageContainer, Info, ItemContainer, Name, NotInStock, NotInStockText, Price, ProductsContainer, Title, Wrapper } from './ProductListElements'
import CartAdd from '../../icons/CartAdd/CartAdd';

//instance of component to enable using hocks.
const withHoc = Component => props => {
  const location = useLocation();
  const currency = useSelector(state =>state.currency)
  return <Component {...props} location={location}  currency={currency}/>;
};



 class ProductList extends Component {

    constructor(props){
        super(props)
        this.state = {
            loading:true,
            category:{},
            product:{}
        }
    }

    display(){
      const cat = this.props.location.pathname.split("/")[2]
      const requestBody = {
          query:`
          {
            category(input:{title:"${cat}"}){
              name
              products{
                id
                name
                brand
                prices{
                  amount
                  currency{
                    label
                    symbol
                  }
                }
                inStock
                gallery
                category
                attributes{
                  id
                  name
                  items{
                    id
                    value
                    displayValue
                  }
                }
                description
              }
            }
          }
          `
      }

      fetch("http://localhost:4000/" , {
      method:"POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body:JSON.stringify(requestBody),
      })
      .then(res => {
      return res.json();
      })
      .then(resData => {
        this.setState({
          category:resData.data.category
        })      
      })
      .then(()=> {this.setState({loading:false})})
      .catch(err => console.log(err));
    }

  render() {
    this.display();
    return (
      <Container>
        <Wrapper>
            <Title>{this.state.category.name}</Title>
            <ProductsContainer>
              {
                this.state.loading
                ?<div>Loading...</div>
                :this.state.category.products.map(item => 
                  <ItemContainer key={item.id} >
                    <ImageContainer>
                      <Image src={item.gallery[0]} alt='img'/>
                    </ImageContainer>
                    <Info>
                      <Name>{item.name}</Name>
                        {
                          // eslint-disable-next-line
                          item.prices.map(priceItem => {
                            if(priceItem.currency.label === this.props.currency.label){
                              return(<Price key={priceItem.currency.label}>{priceItem.currency.symbol}{Math.floor(priceItem.amount)}</Price>)
                            }
                          })
                        }
                    </Info>
                      <Link to={`/product/${item.id}`}>
                        <HoverStyle/>
                        {
                          !item.inStock&&
                          <NotInStock>
                            <NotInStockText>OUT OF STOCK</NotInStockText>
                          </NotInStock>
                        }
                      </Link>
                      <CartIconContainer >
                        <CartAdd product={item}/>
                      </CartIconContainer>
                  </ItemContainer>
                )
              }
            </ProductsContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default withHoc(ProductList)
