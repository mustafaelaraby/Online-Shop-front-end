import React, { Component } from 'react';
import { 
  AddtoCart,
  AmountContainer,
  AmountText,
  Attribute,
  AttributeElement,
  AttributeTitle,
  AttributeWrapper,
  ColorElement,
  Container, 
  Desc, 
  DescContainer, 
  IconContaner, 
  Info, 
  Name, 
  Price, 
  PriceTitle, 
  PriceValue, 
  Quantity, 
  Wrapper 
} from './ProductElements';
import { useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addProduct } from '../../Redux/cartRedux';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Add from '../../icons/Add-Remove/Add';
import Remove from '../../icons/Add-Remove/Remove';

//instance of component to enable using hocks.
const withHoc = Component => props => {
  const location = useLocation();
  const dispatch = useDispatch()
  const currency = useSelector(state => state.currency);
  return <Component {...props} location={location} dispatch = {dispatch} currency={currency}/>;
};


class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading:true,
      product:{},
      quantity:1,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleAttribute = this.handleAttribute.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  componentDidMount(){
  const id = this.props.location.pathname.split("/")[2];
    const requestBody ={
      query:`
      {
        product(id:"${id}"){
          name
          id
          category
          brand
          inStock
          description
          gallery
          prices{
            amount
            currency{
              symbol
              label
            }
          }
          attributes{
            id
            name
            type
            items{
              displayValue
              id
              value
            }
          }
        }
      }`
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
        product:resData.data.product,
        // eslint-disable-next-line
      })
      // eslint-disable-next-line
      resData.data.product.attributes.map(attribute => {
          this.setState({[attribute.name]: attribute.items[0].value})
      })
      
    })
    .then(()=> {this.setState({loading:false})})
    .catch(err => console.log(err));

  }

  //select attributes.
  handleAttribute = (e)=> {
    const name = e.currentTarget.parentNode.getAttribute("data-parent");
    const value = e.currentTarget.getAttribute("data-value");
    this.setState({[name]:value})
  }

  //set quantity
  handleQuantity(type){
    if(type === "dec" && this.state.quantity > 1){
      this.setState({quantity:this.state.quantity -1})
    }else if(type === "inc"){
      this.setState({quantity:this.state.quantity + 1})
    }
  }

  //add to cart.
  handleClick = () => {
    const idCart = Date.now();
    const quantity = this.state.quantity
    const priceElement = this.state.product.prices.find(item => item.currency.label === this.props.currency.label);
    const price = priceElement.amount;
    const totalPrice = price * quantity;
    let atts = [];
    for (const [key, value] of Object.entries(this.state)) {  
      // eslint-disable-next-line
      this.state.product.attributes.map((item)=>{
      if (key === Object.values(item)[1]){
        atts.push({[key]:value})
        }
      })
    }
    let attrubutes = atts.reduce((prev, current) => ({
      ...prev,
      ...current
    }));
    this.props.dispatch(
      addProduct({...this.state.product,idCart,price,quantity,totalPrice,...attrubutes})
    );
  }


  render() {

    const currency = this.props.currency;
    return(
      <Container>
      {this.state.loading
        ?<div>Loading...</div>
        :  <Wrapper>
          <ImageSlider gallery={this.state.product.gallery}/>
        <Info>
          <Name>{this.state.product.name}</Name>
          {this.state.product.attributes.map(attribute => {
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
                            selectedAttribute={this.state[attribute.name]}
                            onClick={this.handleAttribute}
                            >
                          </ColorElement>
                        )
                      }else{
                        return(
                          <AttributeElement
                            key={item.id}
                            data-value={item.value}
                            value={item.value} 
                            selectedAttribute={this.state[attribute.name]}
                            onClick={this.handleAttribute}
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
          })}
          <Price>
            <PriceTitle>Price:</PriceTitle>
              {
                // eslint-disable-next-line
                this.state.product.prices.map(item => {
                  if(item.currency.label === currency.label){
                    return(<PriceValue key={item.currency.label}>{item.currency.symbol}{Math.floor(item.amount)}</PriceValue>)
                  }
                })
              }
          </Price>
          <Quantity>
            <IconContaner onClick={()=> this.handleQuantity("inc")}>
                <Add/>
            </IconContaner>
            <AmountContainer>
                <AmountText>{this.state.quantity}</AmountText>
            </AmountContainer>
            <IconContaner onClick={()=> this.handleQuantity("dec")}>
                <Remove/>
            </IconContaner>                   
            </Quantity>
          <AddtoCart onClick={this.handleClick}>ADD TO CART</AddtoCart>
          <DescContainer>
            <Desc dangerouslySetInnerHTML={{ __html:this.state.product.description }}/>
          </DescContainer>
        </Info>
      </Wrapper>    
      }
    </Container>
    )
  }   
}

export default withHoc(Product);