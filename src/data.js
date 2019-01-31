import superia from './photos/superia.jpg'
import ultramax from './photos/ultramax.jpg'
import ektachrome from './photos/ektachrome.jpg'

export const data = [
  {
    name: 'Kodak Ektachrome E100',
    brand: 'Kodak',
    description: 'Extremely fine grain daylight-balanced color transparency film',
    stockPhoto: ektachrome,
    speed: 100,
    sampleImages: [
      'https://c2.staticflickr.com/2/1754/40660735900_c3c65b6a51_o.jpg',
      'https://c2.staticflickr.com/2/1917/31560985708_064802f793_h.jpg'
    ]
  },
  {
    name: 'Kodak Ultra Max 400',
    brand: 'Kodak',
    description: 'High-speed daylight-balance color negative film',
    stockPhoto: ultramax,
    speed: 400,
    sampleImages: [
      'https://c2.staticflickr.com/2/1924/43295281240_d252f054a2_o.jpg',
      'https://c2.staticflickr.com/2/1913/45109222171_b952aa1fca_o.jpg',
      'https://c2.staticflickr.com/2/1966/43295279200_4681783a24_o.jpg',
      'https://c2.staticflickr.com/2/1938/44197941045_095f981b4e_o.jpg',
    ]
  },
  {
    name: 'Fujifilm Superia 400',
    brand: 'Fujifilm',
    description: 'All-around film perfect for outdoors or indoors with flash',
    stockPhoto: superia,
    speed: 400,
    sampleImages: [
      'https://c2.staticflickr.com/2/1938/43539279750_f2fe2a5e70_h.jpg',
      'https://c1.staticflickr.com/1/837/28594927757_472d5d2f84_h.jpg',
      'https://c2.staticflickr.com/2/1724/41746309434_dc99116e0c_o.jpg'
    ]
  }
]
