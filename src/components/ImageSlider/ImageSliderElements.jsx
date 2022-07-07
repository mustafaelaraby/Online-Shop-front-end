import styled from "styled-components";

export const Container = styled.div`
    width: 50vw;
    height: 70vh;
`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 20px 0px;
`
export const Column = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ColumnImage = styled.img`
    width: 50px;
    height: 50px;
    margin: 2.5px 0px;
    border: 2px solid ;
    object-fit: cover;
    cursor: pointer;
    border-color:${props => (props.value ===props.viewed) ? "orange" : "lightgray"};
`

export const Image = styled.img`
    width: 400px;
    height: 420px;
    margin: 5px 20px;
    object-fit: cover;
`