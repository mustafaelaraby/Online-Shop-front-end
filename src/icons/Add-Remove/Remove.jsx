import React, { Component } from 'react'
import add from '../SVG/remove-svgrepo-com.svg'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Img = styled.img`
    width: 15px;
    height: 15px;
`

export default class Remove extends Component {
  render() {
    return (
      <Container>
        <Img src={add} alt="add" />
      </Container>
    )
  }
}
