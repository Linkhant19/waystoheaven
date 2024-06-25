import React from 'react';
import './App.css';
import Header from './components/Header';
import GridItem from './components/GridItem';

function App() {
  const items = [
    // my images are in images folder in public folder.
    // public can be directly accessed via root path!
    { image: 'images/1.jpg', altText: 'Image 1', overlayText: 'Crown Dreams' },
    { image: 'images/2.jpg', altText: 'Image 2' },
    { image: 'images/3.jpg', altText: 'Image 3', overlayText: 'San Jose' },
    { image: 'images/4.jpg', altText: 'Image 4', overlayText: 'Creative Writing Class' },
    { image: 'images/5.jpg', altText: 'Image 5', overlayText: 'Seven Ways to Heaven' },
    { image: 'images/6.jpg', altText: 'Image 6', overlayText: 'Imaginary' },
    { image: 'images/7.jpg', altText: 'Image 7', overlayText: 'New People' },
    { image: 'images/8.jpg', altText: 'Image 8', overlayText: 'Jane' },
    { image: 'images/9.jpg', altText: 'Image 9' },
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

