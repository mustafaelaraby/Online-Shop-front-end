import styled from "styled-components";

export const Container = styled.div`
width: 50px;
height: 40px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const CurrencyPreview = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;
`

export const CurrencyText =styled.span`
font-weight: 600;
`

export const CurrencyIconContainer = styled.div`
position: relative;
width: 40px;
height: 40px;
`

export const CurrencyMenueContainer = styled.div`
position: absolute;
top: 40px;
left: 103px;
width: 114px;
height:169px;
z-index: 1000;
background-color: white;
`

export const CurrencyMenue = styled.div`
width: 100%;
height: 100%;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
-webkit-box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
z-index: 1001;
`

export const CurrencyMenueItem = styled.p`
margin: 0;
padding: 0;
width: 100%;
height: 45px;
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
font-weight: 400;
cursor: pointer;
&:hover{
    background-color: #EEEEEE;
}
z-index: 1002;
`