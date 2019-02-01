import React from 'react'
import './Photo.scss';

export const Photo = (props) =>  {
  const { imageSrc } = props
  return (
    <div className="photo-container animated bounceInLeft">
      <img src={imageSrc} alt=""/>
    </div>
  )
}

export default Photo