import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
        left:10px;
        top: 8px;
        z-index: 1;
`

export default class ArrowUp extends Component {
  render() {
    return (
    <Container>
      <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3.5L4 0.5L7 3.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Container>
    )
  }
}

