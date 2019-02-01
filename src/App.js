import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import Info from '../src/components/Info'
import Photo from '../src/components/Photo'
import { mockApiData } from './mockApiData.js'

import './App.scss';

const frameViewButtons = (el) => (
  <div className="frame-view-btns-container">
    <button onClick={() => el.next()}>Next</button>
    <button onClick={() => el.prev()}>Previous</button>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    let reactSwipeEl;
    return (
      <div className="App">
        <ReactSwipe
          className="carousel"
          ref={el => (reactSwipeEl = el)}
          swipeOptions={{ 
            continuous: false,
            callback: (b) => {
              console.log(`hello world`, b)
            }
          }}
        >
          {mockApiData.map(({name, description, sampleImages}, i) => {
            return (
              <div>
                <Info
                  index={i+1}
                  name={name}
                  description={description}
                />
                <Photo
                  imageSrc={sampleImages[0]}
                />
              </div>
            )
          })}
        </ReactSwipe>
        {frameViewButtons(reactSwipeEl)}
      </div>
    );
  }
}

export default App;
