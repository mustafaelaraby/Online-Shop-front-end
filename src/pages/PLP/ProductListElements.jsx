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

export const Title = styled.h1`
padding: 0;
padding-bottom: 30px;
margin: 0;
font-family: 'Raleway', sans-serif;
`

export const ProductsContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-wrap: wrap;
`
export const CartIconContainer = styled.div`
    opacity: 0;
    position: absolute;
    bottom: 75px;
    right: 40px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5ECE7B;
    z-index: 2;
    cursor: pointer;
`


export const HoverStyle =styled.div`
    opacity: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: flex-end;
    z-index  : 1;
`
export const ItemContainer = styled.div`
position: relative;
padding: 16px;
width: 386px;
height: 444px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
margin-right: 10px;
margin-bottom: 10px;

&:hover ${HoverStyle} {
    opacity: 1;
    cursor: pointer;
}

&:hover ${CartIconContainer} {
    opacity: 1;
    cursor: pointer;
}

&:hover{
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
}

`

export const ImageContainer = styled.div`
    width: 354px;
    height: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
height: 100%;
`

export const Info = styled.div`
padding: 20px 0px;
display: flex;
flex-direction: column;
width: 354px;
`

export const NameContaner = styled.div`
    display: flex;
`

export const Brand = styled.span`
    font-size: 18px;
    font-weight: 300;
    margin-right :10px ;
`

export const Name = styled.span`
font-size: 18px;
font-weight: 300;
`

export const Price = styled.span`
font-size: 18px;
font-weight: 500;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
export const NotInStock =styled.div`
height: 100%;
width: 100%;
display: flex;
position: absolute;
top: 0;
left: 0;
align-items: center;
justify-content: center;
background-color:#ffffff7a;
cursor: pointer;  
`
export const NotInStockText = styled.h1`
    color: #1615151a;
` 


