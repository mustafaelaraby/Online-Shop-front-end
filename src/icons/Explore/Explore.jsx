import React, { Component } from 'react'
import styled from 'styled-components'
import view from "../SVG/view.svg"

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Img = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
`
export default class Explore extends Component {
  render() {
    return (
      <Container>
        <Img src={view} alt='img'/>
      </Container>
    )
  }
}
