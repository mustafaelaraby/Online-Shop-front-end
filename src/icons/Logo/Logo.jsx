import React, { Component } from 'react'
import styled from 'styled-components'

import Logo1 from './Logo1'
import Logo2 from './Logo2'
import Logo3 from './Logo3'
import Logo4 from './Logo4'

const Container = styled.div`
position: relative;
width: 40px;
height: 40px;
`


export default class Logo extends Component {
  render() {
    return (
    <Container>
      <Logo1/>
      <Logo2/>
      <Logo3/>
      <Logo4/>
    </Container>
    )
  }
}
