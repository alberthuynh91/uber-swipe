import React, { Component } from 'react'

export const generateRandomColor = () => {
  const n1 = Math.floor(Math.random() * 300) + 1
  const n2 = Math.floor(Math.random() * 300) + 1
  const n3 = Math.floor(Math.random() * 300) + 1
  const n4 = Math.floor(Math.random() * 70) + 1
  const n5 = Math.floor(Math.random() * 70) + 1
  return {
    backgroundImage: `radial-gradient(farthest-corner at ${n4}px ${n5}px,
      rgb(${n1}, ${n2}, ${n3}) 0%, rgb(${n3}, ${n1}, ${n2}) 100%)`
  }
}

export class Info extends Component {

  render() {
    const { index, name, description, stockPhoto, className = ''} = this.props
    return (
      <div className={`info-container animated bounceInLeft ${className}`}>
        <div 
          className="index-container"
          style={generateRandomColor()}
        >
          <span className="index">{index}</span>
        </div>
        <img className="stock-photo" src={stockPhoto} alt=""/>
        <div className="title">{name}</div>
        <p>{description}</p>
      </div>
    )
  }
}


export default Info