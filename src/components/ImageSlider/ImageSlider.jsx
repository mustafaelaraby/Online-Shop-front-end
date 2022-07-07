import React, { Component } from 'react'
import 
{ 
    Column, 
    ColumnImage, 
    Container, 
    Image, 
    Wrapper, 
} from './ImageSliderElements'

export default class ImageSlider extends Component {
    constructor(props){
        super(props)
        this.state = {
            index:0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    //set state to index of current image.
    handleClick(index){
        this.setState({
            index,
        })
    }
  render() {
    return (
      <Container>
        <Wrapper>
            <Column>
                {
                    this.props.gallery.map((img , imgIndex)=>{
                        return(<ColumnImage key={imgIndex} src={img} data-value={imgIndex} value={imgIndex} viewed={this.state.index} alt='img' onClick={()=>{this.handleClick(imgIndex)}}/>)
                    })
                }
                
            </Column>
            <Image src={this.props.gallery[this.state.index]} alt='img'/>
        </Wrapper>
      </Container>
    )
  }
}
