import React from 'react';
import './App.css';
import Header from './components/Header';
import GridItem from './components/GridItem';

// importing from src images. 
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';

function App() {
  const items = [
    // my images are in images folder in public folder.
    // public can be directly accessed via root path!
    // Update: I changed images into src folder instead because public folder was causing bugs.

    { image: img1, altText: 'Image 1', overlayText: 'Crown Dreams' },
    { image: img2, altText: 'Image 2' },
    { image: img3, altText: 'Image 3', overlayText: 'San Jose' },
    { image: img4, altText: 'Image 4', overlayText: 'Creative Writing Class' },
    { image: img5, altText: 'Image 5', overlayText: 'Seven Ways to Heaven' },
    { image: img6, altText: 'Image 6', overlayText: 'Imaginary' },
    { image: img7, altText: 'Image 7', overlayText: 'New People' },
    { image: img8, altText: 'Image 8', overlayText: 'Jane' },
    { image: img9, altText: 'Image 9' },
  ];

  // images will be replaced later when I actually have taken good photos. 
  
  return (
    <div className="App">
      <Header />
      <div className="grid-container">
        {items.map((item, index) => (
          <GridItem key={index} image={item.image} altText={item.altText} overlayText={item.overlayText} />
        ))}
      </div>
    </div>
  );
}

export default App;

