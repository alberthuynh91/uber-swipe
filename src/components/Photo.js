import React, { Component } from 'react'

export class Photo extends Component {

  render() {
    const { imageSrc } = this.props
    return (
      <div className="photo-container animated bounceInLeft">
        <img src={imageSrc} alt=""/>
      </div>
    )
  }
}


export default Photo