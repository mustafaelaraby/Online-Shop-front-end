import styled from 'styled-components'
import {NavLink as Link } from 'react-router-dom'

export const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 900;
    background-color: white;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const Left = styled.div`
flex:1;
height: 100%;
`

export const Categories = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: left;
    height: 56px;
    top: 24px;
    left: 101px;
`

export const Category = styled(Link)`
    margin: 0 10px;
    padding: 0 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    border-bottom: 2px solid white;
    cursor: pointer;
    &:hover{
        border-bottom: 2px solid #5ECE7B; 
    }

    &.active{
        font-weight: 550;
        border-bottom: 2px solid #5ECE7B;
        color :#5ECE7B;
    }
`

export const CategoryText = styled.span`
    margin-top: 5px;
`


export const Center = styled.div`
flex:1;
width: 100%;
height: 100%;
`
export const CenterContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const Right = styled.div`
flex:1;
`
export const RightElements = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    display: flex;
    justify-content: flex-end;
    width: 204px;
    height: 56px;
    top: 24px;
    right: 101px;
`
export const CartContainer = styled.div`
position: relative;
width: 40px;
height: 40px;
`
export const CartBadge = styled.span`
position: absolute;
left:22px;
top: 2px;
z-index: 1;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: black;
color: white;
font-size: 14px;
font-weight: 500;
text-align: center;
`






