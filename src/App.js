import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

import Info from '../src/components/Info'
import Photo from '../src/components/Photo'
import './App.scss';

const filmData = [
  {
    name: 'Kodak Porta 400',
    brand: 'Kodak',
    description: 'Contrasty kodak film',
    speed: 400,
    sampleImages: [
      'https://c2.staticflickr.com/2/1754/40660735900_c3c65b6a51_o.jpg',
      'https://c2.staticflickr.com/2/1917/31560985708_064802f793_h.jpg'
    ]
  },
  {
    name: 'Kodak Ultra Max 400',
    brand: 'Kodak',
    description: 'Cheap and good value kodak film',
    speed: 400,
    sampleImages: [
      'https://c2.staticflickr.com/2/1924/43295281240_d252f054a2_o.jpg',
      'https://c2.staticflickr.com/2/1913/45109222171_b952aa1fca_o.jpg',
      'https://c2.staticflickr.com/2/1966/43295279200_4681783a24_o.jpg',
      'https://c2.staticflickr.com/2/1938/44197941045_095f981b4e_o.jpg',
    ]
  },
  {
    name: 'Fujifilm Superia 200',
    brand: 'Fujifilm',
    description: 'Best priced fuji film',
    speed: 200,
    sampleImages: [
      'https://c2.staticflickr.com/2/1938/43539279750_f2fe2a5e70_h.jpg',
      'https://c1.staticflickr.com/1/837/28594927757_472d5d2f84_h.jpg',
      'https://c2.staticflickr.com/2/1724/41746309434_dc99116e0c_o.jpg'
    ]
  }
]

const frameViewButtons = (el) => (
  <div>
    <button onClick={() => el.next()}>Next</button>
    <button onClick={() => el.prev()}>Previous</button>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      infoClassName: '',
      currentScreen: 0
    }
  }
  
  render() {
    let reactSwipeEl;
    const isMobile = window.innerWidth < 479
    return (
      <div className="App">
        <ReactSwipe
          className="carousel"
          swipeOptions={{ 
            continuous: false,
            callback: (b) => {
              console.log(`hello world`, b)
            }

          }}
          ref={el => (reactSwipeEl = el)}
        >
          {filmData.map((film, i) => {
            console.log(`what is re:`, reactSwipeEl)
            return (
              <div>
                <Info
                  className={'animated bounceInLeft'}
                  index={i+1}
                  name={film.name}
                  description={film.description}
                />
                <Photo
                  imageSrc={film.sampleImages[1]}
                />
              </div>
            )
          })}
        </ReactSwipe>
        { !isMobile && frameViewButtons(reactSwipeEl)}
        
      </div>
    );
  }
}

export default App;
