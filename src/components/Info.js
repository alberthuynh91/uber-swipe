import React, { Component } from 'react'

export class Info extends Component {

  componentDidMount() {
    console.log(`info component mounted`)
  }

  render() {
    const { index, name, description, className = ''} = this.props
    // let infoClass = className
    // if (position === index) {
    //   infoClass = 'animated bounceInLeft'
    // }
    return (
      <div className={`info-container  ${className}`}>
        <h1 className="index-container"><span className="index">{index}</span></h1>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    )
  }
}


export default Info