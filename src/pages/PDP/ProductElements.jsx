import styled from "styled-components";

export const Container = styled.div`
margin: 0;
padding: 0;
width: 100vw;
height: 80vh;
`
export const Wrapper = styled.div`
margin: 30px;
width: 95.5%;
height: 100%;
display: flex;
`

export const Info = styled.div`
width: 250px;
padding: 20px;
display: flex;
flex-direction: column;
`

export const Name = styled.h2`
margin: 0;
padding: 20px 0px;
font-size: 18px;
font-weight: 700;
font-weight: 400;
`

export const Attribute = styled.div`
padding: 5px;
padding: 10px 0px;
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
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
cursor: pointer;
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
export const Price = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
`
export const PriceTitle = styled.span`
font-weight: 500;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

export const PriceValue = styled.h2`
margin: 0;
padding: 5px 0;
font-size: 16px;
font-weight: 600;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

export const Quantity = styled.div`
    display: flex;
    padding: 10px 0px;
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

export const AddtoCart = styled.button`
    width: 240;
    height: 50px;
    padding: 10px 0;
    background-color: #5ECE7B;
    border: 1px solid #5ECE7B;
    cursor: pointer;
    color: white;
    margin-top: 20px;
`
export const DescContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
`

export const Desc = styled.p`
    
`