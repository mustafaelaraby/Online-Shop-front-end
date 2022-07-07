import styled from "styled-components";

export const Container = styled.div`
margin: 0;
padding: 0;
width: 100vw;
`
export const Wrapper = styled.div`
margin: 30px;
width: 95.5%;
display: flex;
flex-direction: column;
`
export const Title = styled.h2`
padding-bottom:30px;
margin: 0;
`

export const CartContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

export const TopContainer = styled.div``

export const ItemContainer = styled.div`
display: flex;
width: 100%;
margin-bottom:20px;
border-bottom: 2px solid lightgray;
`


export const Info = styled.div`
width: auto;
display: flex;
width: 100%;
height: 100%;
`

export const Details = styled.div`
flex:10;
`

export const Name = styled.h2`
margin: 0;
padding: 10px 0;
font-size: 18px;
font-weight: 700;
&:hover{
    text-decoration: underline;
    color: darkblue;
}
`

export const Price = styled.h2`
margin: 0;
padding: 10px 0;
font-size: 18px;
font-weight: 800;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
export const Attribute = styled.div`
padding: 5px;
padding: 20px 0px;
`

export const AttributeTitle = styled.span`
font-size: 16px;
`

export const AttributeWrapper = styled.div`
padding: 5px 0px;
display: flex;
align-items: center;
justify-content: flex-start;
font-size: 14px;
`

export const AttributeElement = styled.div`
width: 60px;
height: 40px;
border: 1px solid black;
display: flex;
margin-right: 10px;
align-items: center;
justify-content: center;
font-size: 12px;
font-family: Arial, Helvetica, sans-serif;
color: ${props => (props.value === props.selectedAttribute)?"white":"black"};
background-color: ${props => (props.value === props.selectedAttribute)?"black":"white"};
`

export const ColorElement = styled.div`
width: 25px;
height: 25px;
margin-right: 10px;
background-color: ${props => props = props.value};
border: 2px solid lightgray;
border-color: ${props => (props.value === props.selectedAttribute) ?"orange":props.color};

`


export const Quantity = styled.div`
flex: 1;
padding: 5px;
width: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
export const IconContaner = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;

`

export const AmountContainer = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AmountText = styled.span`
`

export const ImageContainer = styled.div`
padding: 5px;
height: 100%;
`

export const Image = styled.img`
width: 200px;
height: 200px;
object-fit: cover;
`

export const BottomContainer = styled.div`
display: flex;
flex-direction: column;
`

export const Tax = styled.p`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

export const Quant = styled.p`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

export const Total = styled.p`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

export const OrderButton = styled.button`
    width: 240px;
    height: 50px;
    padding: 10px 0;
    background-color: #5ECE7B;
    border: 1px solid #5ECE7B;
    cursor: pointer;
    color: white;
    margin-top: 20px;
    font-size: 24px;
`
export const EmptyCartContainer = styled.div`
display: flex;
flex-direction: column;
`
export const EmptyCartText = styled.h1`
    font-size: 36px;
    font-weight: 600;
`
export const ShopLink = styled.h3``
