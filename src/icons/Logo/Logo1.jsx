import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
        left:6px;
        top: 4px;
        z-index: 1;
`

export default class Logo1 extends Component {
  render() {
    return (
      <Container>
        <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.0222 23.6646C28.0494 23.983 27.8009 24.2566 27.4846 24.2566H1.46924C1.15373 24.2566 0.90553 23.9843 0.931564 23.6665L2.7959 0.912269C2.8191 0.629618 3.05287 0.412109 3.33372 0.412109H25.5426C25.8226 0.412109 26.0561 0.628527 26.0801 0.910361L28.0222 23.6646Z" fill="#1DCF65"/>
        </svg>  
      </Container>
    )
  }
}
