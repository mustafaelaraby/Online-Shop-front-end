import styled from "styled-components";

export const Container = styled.div`
position: absolute;
top: 40px;
left: -200px;
width: 300px;
padding: 10px;
-webkit-box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
z-index: 1003;
background-color: white;
`
export const TitleContainer = styled.div`
margin: 0;
padding: 0;
width: 100%;
height: 40px;
display: flex;
align-items: center;
z-index: 1004;
`

export const Title = styled.h1`
font-size: 16px;
font-weight: 600;
padding: 10px;
z-index: 1005;
`

export const Number = styled.span`
font-size: 16px;
font-weight: 350;
margin-left: 10px;
text-align: center;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
z-index: 1006;
`

export const ItemContainer = styled.div`
display: flex;
width: 100%;
margin: 10px 0px;
z-index: 1007;
border-bottom: 2px solid lightgray;
`

export const Info = styled.div`
flex:2;
display: flex;
width: 90%;
height: 100%;
z-index: 1008;
`

export const Details = styled.div`
flex:4;
z-index: 1009;
`

export const Name = styled.h2`
margin: 0;
padding: 5px;
font-size: 16px;
font-weight: 400;
z-index: 1010;
&:hover{
    text-decoration: underline;
    color: darkblue;
}
`

export const Price = styled.h2`
margin: 0;
padding: 5px;
font-size: 16px;
font-weight: 600;
z-index: 1011;
font-family: Arial, Helvetica, sans-serif;
`

export const Attribute = styled.div`
padding: 5px;
padding: 5px 0px;
`

export const AttributeTitle = styled.span`
font-size: 12px;
`

export const AttributeWrapper = styled.div`
padding: 5px 0px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-wrap: wrap;
font-size: 14px;
`

export const AttributeElement = styled.div`
width: 25px;
height: 20px;
border: 1px solid black;
display: flex;
margin-right: 5px;
align-items: center;
justify-content: center;
font-size: 8px;
font-family: Arial, Helvetica, sans-serif;
color: ${props => (props.value === props.selectedAttribute)?"white":"black"};
background-color: ${props => (props.value === props.selectedAttribute)?"black":"white"};
`

export const ColorElement = styled.div`
width: 15px;
height: 15px;
margin-right: 5px;
background-color: ${props => props = props.value};
border: 2px solid lightgray;
border-color: ${props => (props.value === props.selectedAttribute) ?"orange":props.color};

`


export const Quantity = styled.div`
flex: 1;
padding: 5px;
width: 40px;
height: 95%;
z-index: 1020;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
export const IconContaner = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    background-color: white;
    z-index: 1021;
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
    z-index: 1021;
`

export const AmountText = styled.span`
z-index: 1022;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

export const ImageContainer = styled.div`
flex:1;
padding: 5px;
width: 100%;
height: 100%;
z-index: 1021;
`

export const Image = styled.img`
width: 100%;
height: 95%;
z-index: 1022;
`
export const BottomContainer = styled.div`
    padding: 5px;
    width: 96.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1023;
`
export const ViewBag = styled.button`
width: 135px;
height: 40px;
background-color: white;
border: 1px solid black;
cursor: pointer;
z-index: 1024;
`

export const Checkout =styled.button`
width: 135px;
height: 40px;
background-color: #5ECE7B;
border: 1px solid #5ECE7B;
cursor: pointer;
z-index: 1025;
`
