import React, { Component } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import ArrowDown from '../../icons/Arrow/ArrowDown'
import ArrowUp from '../../icons/Arrow/ArrowUp'
import { updateProductCurrency } from '../../Redux/cartRedux';
import { selectCurrency } from '../../Redux/currencyRedux';
import { 
  Container,
  CurrencyIconContainer,
  CurrencyMenue,
  CurrencyMenueContainer,
  CurrencyMenueItem,
  CurrencyPreview,
  CurrencyText
} from './CurrencyConverterElements';

//instance of component to enable using hocks.
const withHoc = Component => props => {
  const dispatch = useDispatch()
  const currency = useSelector(state => state.currency);
  return <Component {...props}  dispatch = {dispatch} currency = {currency}/>;
};


class CurrencyConverter extends Component {

  constructor(props){
    super(props)
      this.state = {
        loading:true,
        open:false,
        currency:{label:"USD",symbol:"$"},
        currencies:[]
      }
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount(){
    const requestBody = {
      query:`{
        currencies{
          label
          symbol
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
    .then(resData => {this.setState({currencies:resData.data.currencies,loading:false})
    })
    .catch(err => console.log(err));
  }
  // select currency
  handleClick = (e)=> {
    const label = e.currentTarget.getAttribute("data-label");
    const symbol = e.currentTarget.getAttribute("data-symbol");
    this.setState({
      open:!this.state.open,
      currency:{label,symbol}
    })
    this.props.dispatch(selectCurrency({label,symbol}))
    this.props.dispatch(updateProductCurrency({label,symbol}))

  }

  render() {
    const currency = this.props.currency
    return (
      <Container>
        <CurrencyPreview>
            <CurrencyText>{currency.symbol}</CurrencyText>
        </CurrencyPreview>
        <CurrencyIconContainer onClick={()=> this.setState({open:!this.state.open})}>
            {this.state.open ?<ArrowUp/>:<ArrowDown/>}
        </CurrencyIconContainer>
        {this.state.open&& 
            <CurrencyMenueContainer>
                <CurrencyMenue>
                    {this.state.loading
                      ?<div>loading...</div>
                      :this.state.currencies.map(item => 
                        <CurrencyMenueItem onClick={this.handleClick} key ={item.label} data-label={item.label} data-symbol={item.symbol} >{item.symbol} {item.label}</CurrencyMenueItem>
                        )
                    }
                </CurrencyMenue>
            </CurrencyMenueContainer>
        }
      </Container>
    )
  }
}

export default withHoc(CurrencyConverter)