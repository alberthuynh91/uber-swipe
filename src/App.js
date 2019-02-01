import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import Info from './components/Info/Info'
import Photo from './components/Photo/Photo'
import { mockApiData } from './mockApiData.js'
import './App.scss';

class App extends Component {
  
  render() {
    let reactSwipeEl;
    return (
      <div className="App">
        <ReactSwipe
          className="carousel"
          ref={el => (reactSwipeEl = el)}
          swipeOptions={{ 
            continuous: false
          }}
        >
          {mockApiData.map(({name, description, sampleImages}, i) => {
            return (
              <div>
                <Info index={i+1} name={name} description={description}/>
                <Photo imageSrc={sampleImages[0]} />
                <div className="frame-view-btns-container">
                  <div className="prev" onClick={() => reactSwipeEl.prev()}>
                    <span className="arrow">&#10094;</span>
                  </div>
                  <div className="next" onClick={() => reactSwipeEl.next()}>
                    <span className="arrow">&#10095;</span>
                  </div>
                </div>
              </div>
            )
          })}
        </ReactSwipe>
      </div>
    );
  }
}

export default App;
 